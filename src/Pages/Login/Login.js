import React, {useState, useRef} from "react";
import './Login.css';
import validator from 'validator';
import { useNavigate } from "react-router-dom";
// import useMongoDBForLogin from "./../hooks/useMongoDBForLogin";
// import useFirebase from "./../hooks/useFirebase";

function Login() {
  // react router Navigate
  const Navigate = useNavigate();

  const [logInServerSideData, setLogInServerSideData] = useState({});
  const [Error, setError] = useState("");
  
  // const { signInWithGoogle, Token, User, signInWithForm, handelFormEmail, handelFormPass, onSubmit, Error } = useFirebase();
  // console.log(User, Token);

  // mongoDb

  const emailRef = useRef();
  const passRef = useRef();

  const formOnSubmit = e => {
    e.preventDefault();
  };

  const signInWithForm = () => {
  const email = emailRef.current.value; 
  const pass = passRef.current.value;
  
  if(validator.isEmail(email)){
    
    const loginUserInfo = {email, pass};
  
    fetch("http://localhost:2333/login", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginUserInfo)
    })
    .then(res => res.json())
    .then(data => {
      const Data = data;
      setLogInServerSideData(Data);
      
      // register back-end errors
      const errors = Data?.error;
      if(errors){
        setError(errors);
      }

      // navigate home page
      if(Data.SG){
        Navigate("/");
      }

    });
  }
  else{
    setError('Enter valid Email!')
  }

};
 
  // set cookie
  const token = logInServerSideData?.token;
  const SG = logInServerSideData?.SG;
  
  if(token || SG){
    document.cookie = encodeURIComponent("jwt") +  "=" + encodeURIComponent(token);
    document.cookie = encodeURIComponent("SG") +  "=" + encodeURIComponent(SG);
  }
  

  return (
    <div className="LogIn">
        <div className="login-form">
            <h1 className="login-headline">Login</h1>
            
            {/* mongoDB */}
            <form onSubmit={formOnSubmit}>
              <input ref={emailRef} type="email" name="email" placeholder="Email" required />
              <br />
              
              <input ref={passRef} type="password" name="password" placeholder="Password" required />
              <br />
              
              <input onClick={signInWithForm} type="submit" value="submit" className="login-submit" />
            </form>
            
            <div className="error">{Error}</div>



            {/* firebase */}
{/*             
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
            </button> */}

        </div>
    </div>
  );
}

export default Login;