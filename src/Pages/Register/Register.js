import React from "react";
import './Register.css';

function Register() {
  return (
    <div className="register">
        <div className="register-form">
            <h1 className="register-headline">Register</h1>
            
            <form>
              <input type="email" name="email" placeholder="Email" />
              <br />
              
              <input type="password" name="password" placeholder="Password" />
              <br />
              
              <input type="submit" value="submit" className="register-submit" />
            </form>
        </div>
    </div>
  );
}

export default Register;