import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const [error,setError] = useState("")

  const {signIn} = use(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();
  

  const handleLogin =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    signIn(email,password)
    .then((result)=>{
      const user = result.user;
      
      navigate(`${location.state? location.state : "/"}`)

    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(errorMessage, errorCode)
      setError(errorCode);
    })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
            <h2 className="font-semibold text-2xl">Login your account</h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" required/>
              {/* password */}
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" required/>
              <div>
                <a className="link link-hover text-accent">Forgot password?</a>
              </div>

              {error && <p className="text-red-400 text-sm">Wrong Password</p>}
              
              <button type="submit" className="btn btn-neutral mt-4">Login</button>
              <p className="mt-3">Don't have an account? <Link to="/auth/register" className="font-bold">Register</Link></p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
