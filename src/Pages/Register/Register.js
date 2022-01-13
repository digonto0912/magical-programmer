import React from "react";
import './Register.css';
import useFirebase from "./../hooks/useFirebase";

function Register() {
  const { signInWithGoogle, Token, User, signUpWithForm, handelFormEmail, handelFormPass, onSubmit, Error } = useFirebase();
  console.log(User, Token);

  return (
    <div className="register">
        <div className="register-form">
            <h1 className="register-headline">Register</h1>
            
            <form onSubmit={onSubmit}>
              <input onBlur={handelFormEmail} type="email" name="email" placeholder="Email" />
              <br />
              
              <input onBlur={handelFormPass} type="password" name="password" placeholder="Password" />
              <br />
              
              <h5 className="text-danger">{Error}</h5>

              <input onBlur={signUpWithForm} type="submit" value="submit" className="register-submit" />
            </form>

            <button onClick={signInWithGoogle} className="login-submit">
                google
            </button>
        </div>
    </div>
  );
}

export default Register;