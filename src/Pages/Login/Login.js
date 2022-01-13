import React from "react";
import './Login.css';
import useFirebase from "./../hooks/useFirebase";

function Login() {
  const { signInWithGoogle, Token, User, signInWithForm, handelFormEmail, handelFormPass, onSubmit, Error } = useFirebase();
  console.log(User, Token);

  return (
    <div className="LogIn">
        <div className="login-form">
            <h1 className="login-headline">Log In</h1>
            
            <form onSubmit={onSubmit}>
              <input onBlur={handelFormEmail} type="email" name="email" placeholder="Email" required />
              <br />
              
              <input onBlur={handelFormPass} type="password" name="password" placeholder="Password" required />
              <br />
              
              <h5 className="text-danger">{Error}</h5>
              <input onBlur={signInWithForm} type="submit" value="submit" className="login-submit" />
            </form>

            <button onClick={signInWithGoogle} className="login-submit">
                google
            </button>
        </div>
    </div>
  );
}

export default Login;