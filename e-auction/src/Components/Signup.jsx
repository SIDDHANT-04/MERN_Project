import React, { useState } from 'react';
import { registerdata } from '../Services/Cars_info';
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    pwd: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    if (formData.pwd.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }
  
    if (formData.pwd !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-zA-Z0-9@#$%^&+=]).{8,}$/;
    if (!passwordRegex.test(formData.pwd)) {
      setErrorMessage('Password must contain at least one digit, one uppercase letter, one lowercase letter, one special symbol, and be at least 8 characters long');
      return;
    }

    try {
      const result = await registerdata(formData);
      navigate(`/login`);
    } catch (error) {
      console.log(error);
    }
    console.log('Form submitted with data:', formData);
  };
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="card text-black m-5" style={{ borderRadius: '25px' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <div className="mb-3">
                  <input
                    type='text'
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Username'
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type='email'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Your Email'
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type='password'
                    name="pwd"
                    value={formData.pwd}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Password'
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type='password'
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Confirm Password'
                    required
                  />
                </div>

                <button type="submit" className='btn btn-success mb-4'>Register</button>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">already have an account?</p>
                  <button className="btn btn-outline-primary mx-2" onClick={() => {navigate('/login')}}>
                    Login in
                  </button>
                </div>
              </div>

              <div className="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' className="img-fluid" alt="Registration"/>
              </div>
            </div>
          </div>
        </div>
      </form>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
};

export default SignUpPage;
