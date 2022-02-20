import React, {useState, useRef} from "react";
import './Register.css';
import validator from 'validator';
import Auth from "../hooks/Auth";
import { useNavigate } from "react-router-dom";
// import useFirebase from "./../hooks/useFirebase";

function Register() {
  // react router Navigate
  const Navigate = useNavigate();
  // Auth
  const { userInfo } = Auth();

  const [registerServerSideData, setRegisterServerSideData] = useState({});
  const [Error, setError] = useState("");

  // const { signInWithGoogle, Token, User, signUpWithForm, handelFormEmail, handelFormPass, onSubmit, Error } = useFirebase();
  // console.log(User, Token);

  // mongoDB

  const emailRef = useRef();
  const passRef = useRef();

  const formOnSubmit = e => {
    e.preventDefault();
  };

  const signUpWithForm = () => {

    const userPay = false;
    const email = emailRef.current.value; 
    const pass = passRef.current.value;
    const coursesNames = ["0"];
  
    if (validator.isEmail(email)) {
    setError('')

    const newUserInfo = {email, pass, userPay, coursesNames};

    fetch("http://localhost:2333/registation", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(newUserInfo)
    })
    .then(res => res.json())
    .then(data => {
      const Data = data;
      setRegisterServerSideData(Data);
      
      // register back-end errors
      const errors = Data?.error;
      if(errors){
        setError(errors);
      }
    });
    }
    else {
      setError('Enter valid Email!')
    }

    if(userInfo.email){
      Navigate("/");
    }
  
  };

  
  // set cookie
  const token = registerServerSideData?.token;
  const SG = registerServerSideData?.SG;
  
  if(token || SG){
    document.cookie = encodeURIComponent("jwt") +  "=" + encodeURIComponent(token);
    document.cookie = encodeURIComponent("SG") +  "=" + encodeURIComponent(SG);
  }

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
            
            <div className="error">{Error}</div>


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