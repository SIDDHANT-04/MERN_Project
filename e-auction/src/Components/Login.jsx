import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { logindata } from '../Services/Cars_info';

export function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    pwd: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted with username:', formData.username, 'and password:', formData.pwd);
    try {
      const result = await logindata(formData.username, formData.pwd);
      if (result) {
         navigate('/home');
      } else {
        setErrorMessage('Invalid username or password');
        setTimeout(() => {
          setErrorMessage('');
        }, 5000); 
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="card text-black m-5" style={{ borderRadius: '25px' }}>
          <div className="card-body">
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <div className="row">
              <div className="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

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
                    type='password'
                    name="pwd"
                    value={formData.pwd}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Password'
                    required
                  />
                </div>

                <button type="submit" className='btn btn-success mb-4'>Login</button>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>
                  <button className="btn btn-outline-primary mx-2" onClick={() => {navigate('/signup')}}>
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' className="img-fluid" alt="Registration"/>
              </div>
            </div>
          </div>
        </div>
      </form>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
}

export default LoginPage;
