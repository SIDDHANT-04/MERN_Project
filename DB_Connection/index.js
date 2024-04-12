import express from 'express';
import mongoose from 'mongoose';
import { CarDetails } from './cars.js';
import { LoginDetails } from './Login.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());

app.use(express.json());

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/cars');
    console.log("connected to database...!");
  } catch (error) {
    console.log("Error db not connected");
  }
}

app.post("/register", async (request, response) => {
  try {
    const reqData = request.body;
    console.log(reqData);

    const hashedPassword = await bcrypt.hash(reqData.pwd, 10);

    const Details = new LoginDetails({
      username: reqData.username,
      email: reqData.email,
      pwd: hashedPassword
    });

    await Details.save();

    const confirmationSubject = 'Registration Confirmation';
    const confirmationText = `Dear ${reqData.username},\n\nThank you for registering. Your account has been successfully created.`;
    await sendEmail(reqData.email, confirmationSubject, confirmationText);

    response.send({ message: 'Registered' });
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Something went wrong" });
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ssiddhantdeshmukh25@gmail.com',
    pass: 'lfvs widi dowm tdfy'
  }
});

async function sendEmail(to, subject, text) {
  const mailOptions = {
    from: 'ssiddhantdeshmukh25@gmail.com',
    to: to,
    subject: subject,
    html: text
  };

  const emailRegex = /\S+@\S+\.\S+/;
  if (!mailOptions.to || !emailRegex.test(mailOptions.to)) {
    throw new Error('Invalid recipient email address');
  }

  await transporter.sendMail(mailOptions);
}

app.get("/login/:username/:pwd", async (request, response) => {
  try {
    const { username, pwd } = request.params;

    const user = await LoginDetails.findOne({ username });

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(pwd, user.pwd);

    if (isPasswordMatch) {
      response.status(200).json({ message: "Login successful", user });
    } else {
      response.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/enter", async (request, response) => {
  try {
    const reqData = request.body;
    console.log(reqData);
    const Details = new CarDetails(reqData);
    console.log(Details);
    await Details.save();

    const tableContent = `
      <table border="1">
        <tr>
          <th>Make</th>
          <td>${reqData.make}</td>
          </tr>
          <tr>
          <th>Model</th>
          <td>${reqData.model}</td>
          </tr>
          <tr>
          <th>Production Year</th>
          <td>${reqData.p_year}</td>
          </tr>
          <tr>
          <th>Price</th>
          <td>${reqData.price}</td>
          </tr>
          <tr>
          <th>Color</th>
          <td>${reqData.color}</td>
          </tr>
          <tr>
          <th>Serial Number</th>
          <td>${reqData.s_num}</td>
          </tr>
          <tr>
          <th>Address</th>
          <td>${reqData.s_add}</td>
          </tr>
          <tr>
          <th>City</th>
          <td>${reqData.s_city}</td>
        </tr>
      </table>
    `;

    const confirmationSubject = 'Car Successfully Registered';
    const confirmationText = `Dear ${reqData.s_name},<br><br>
      Thank you for registering. We're pleased to inform you that the following details for your car have been successfully added:<br><br>
      ${tableContent}<br><br>
      If you have any questions or need further assistance, feel free to reach out.<br><br>
      Best regards,
    `;

    await sendEmail(reqData.email, confirmationSubject, confirmationText);

    response.send({ message: 'Details Inserted' });
  } catch (error) {
    response.send({ message: "Something went wrong..!" });
  }
});

app.get("/detail", async (request, response) => {
  try {
    const Details = await CarDetails.find();
    response.send({ Details: Details });
  } catch (error) {
    response.send({ message: 'Something went wrong..!' });
  }
});

app.get("/detail/:_id", async (request, response) => {
  try {
    const Details = await CarDetails.find({ _id: request.params._id });
    if (Details == null) {
      response.send({ message: "Details Not Found" });
    }
    else {
      response.send({ Details: Details });
    }
  } catch (error) {
    response.send({ message: 'Something went wrong' });
  }
});

app.delete("/delete/:_id", async (request, response) => {
  try {
    await CarDetails.deleteOne({ _id: request.params._id });
    response.send({ message: 'Car deleted' });
  } catch (error) {
    response.send({ message: 'something went wrong...!' })
  }
});

app.put("/puts/:_id", async (request, response) => {
  try {
    await CarDetails.updateOne({ _id: request.params._id }, request.body);
    response.send({ message: "ok updated data" })
  } catch (error) {
    response.send('something went again wrong')
  }
});

app.listen(5550, () => {
  console.log('Server is running on port 5550');
  connectDb();
});
