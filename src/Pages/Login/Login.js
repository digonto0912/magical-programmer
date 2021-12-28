import React from "react";
import './Login.css';

function Login() {
  return (
    <div className="LogIn">
        <div className="login-form">
            <h1 className="login-headline">Log In</h1>
            
            <form>
              <input type="email" name="email" placeholder="Email" />
              <br />
              
              <input type="password" name="password" placeholder="Password" />
              <br />
              
              <input type="submit" value="submit" className="login-submit" />
            </form>
        </div>
    </div>
  );
}

export default Login;