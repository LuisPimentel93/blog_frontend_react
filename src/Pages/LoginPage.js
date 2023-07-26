import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from 'react-router-dom';


const LoginPage = () => {

        const Navigate = useNavigate();
        const URL = `${process.env.REACT_APP_BACKEND_URI}/profiles/login`;

        const [redirect, setRedirect] = useState(false)
        const [signinInput, setSigninInput] = useState({
          username: "",
          password: "",
        });
      
        //hangles the change in text inputs
        const handleChange = (e) => {
          const value = e.target.value;
          setSigninInput({
            ...signinInput,
            [e.target.name]: value,
          });
        };
      
        //handles the submit action
        const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signinInput),
            credentials: 'include'
          });

          if(response.ok){
            setRedirect(true)
          }else{
            alert('wrong credentials')
          }
          
          const data = await response.json();
          console.log("checking data", data);
          if(redirect) {
            return <Navigate to={'/'}/>
          }
          Navigate('/');
        };
         return (
    <form className='login' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type='text' 
        placeholder='Username'
        onChange={handleChange}
        name="username" />

        <input type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"/>
       
        <button>Login</button>

    </form>
  )
}

export default LoginPage
