import React, {useState, useRef} from "react";
import './Login.css';
// import useMongoDBForLogin from "./../hooks/useMongoDBForLogin";
// import useFirebase from "./../hooks/useFirebase";

function Login() {
  // const { signInWithGoogle, Token, User, signInWithForm, handelFormEmail, handelFormPass, onSubmit, Error } = useFirebase();
  // console.log(User, Token);

  // mongoDb

  const [user, setUser] = useState({});

  const emailRef = useRef();
  const passRef = useRef();

    const formOnSubmit = e => {
        e.preventDefault();
    };

    const signInWithForm = () => {
    const email = emailRef.current.value; 
    const pass = passRef.current.value;
    const loginUserInfo = {email, pass};

    fetch("http://localhost:2333/login", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(loginUserInfo)
    })
    .then(res => res.json())
    .then(data => setUser(data))
  };

  

  return (
    <div className="LogIn">
        <div className="login-form">
            <h1 className="login-headline">Log In : {user.pass}</h1>
            
            {/* mongoDB */}
            <form onSubmit={formOnSubmit}>
              <input ref={emailRef} type="email" name="email" placeholder="Email" required />
              <br />
              
              <input ref={passRef} type="password" name="password" placeholder="Password" required />
              <br />
              
              <input onClick={signInWithForm} type="submit" value="submit" className="login-submit" />
            </form>



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