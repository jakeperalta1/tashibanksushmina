import React from 'react';
import mastercard from '../Mastercard.jpeg'
import '../App.css'


const Login = () => {
  return (
    <div className="loginArea container mt-5 d-flex">
      <div className='col-md-6'>
        <img src={mastercard} className="mastercard"/>
      </div>
      <div className='loginBody col-md-4'>
      <h2 className="myHeading">Login</h2>
        
        <form className="myForm">
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="loginbutton btn btn-primary">Login</button>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
