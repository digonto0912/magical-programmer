import React, {useRef} from "react";
import './Register.css';
// import useFirebase from "./../hooks/useFirebase";

function Register() {
  // const { signInWithGoogle, Token, User, signUpWithForm, handelFormEmail, handelFormPass, onSubmit, Error } = useFirebase();
  // console.log(User, Token);

  // mongoDb

  const emailRef = useRef();
  const passRef = useRef();

  const formOnSubmit = e => {
    e.preventDefault();
  };
  const signUpWithForm = () => {
    const email = emailRef.current.value; 
    const pass = passRef.current.value;
    const newUserInfo = {email, pass};

    fetch("http://localhost:2333/registation", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(newUserInfo)
    })
    .then()
  };

  return (
    <div className="register">
        <div className="register-form">
            <h1 className="register-headline">Register</h1>
            
            {/* MongoDB */}
        
            <form onSubmit={formOnSubmit}>
              <input ref={emailRef} type="email" name="email" placeholder="Email" />
              <br />
              
              <input ref={passRef} type="password" name="password" placeholder="Password" />
              <br />

              <input onClick={signUpWithForm} type="submit" value="submit" className="register-submit" />
            </form>
            


            {/* firebase */}
            
            {/* <form onSubmit={onSubmit}>
              <input onBlur={handelFormEmail} type="email" name="email" placeholder="Email" />
              <br />
              
              <input onBlur={handelFormPass} type="password" name="password" placeholder="Password" />
              <br />
              
              <h5 className="text-danger">{Error}</h5>

              <input onBlur={signUpWithForm} type="submit" value="submit" className="register-submit" />
            </form>

            <button onClick={signInWithGoogle} className="login-submit">
                google
            </button> */}

        </div>
    </div>
  );
}

export default Register;