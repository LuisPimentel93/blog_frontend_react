import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const Navigate = useNavigate();
  const [profileInput, setProfileInput] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const URL = `${process.env.REACT_APP_BACKEND_URI}/profiles`;

    const handleChange = (e) => {
        const value = e.target.value;
        setProfileInput({
          ...profileInput,
          [e.target.name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(profileInput)
        const response = await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(profileInput),
        });
        if (response.status !== 201) console.log("error");
        Navigate(`/login`);
      };

  return (

    <form className='signup' onSubmit={handleSubmit}>
        <h1>SignUp</h1>

        <input type='text' 
        placeholder='Username'
        onChange={handleChange}
        name="username" />
        
        <input type='email' 
        onChange={handleChange}
        name="email"
        placeholder="Email"/>
        
        <input  type="text"
        onChange={handleChange}
        name="firstname"
        placeholder="First name"/>
        
        <input type="text"
        onChange={handleChange}
        name="lastname"
        placeholder="Last name"/>
        
        <input type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"/>
        <button>Signup</button>
    </form>
  )
}
export default SignupPage



