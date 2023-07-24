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
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [firstname, setFirstname] = useState('')
    // const [lastname, setLastname] = useState('')
    // const [password, setPassword] = useState('')
    // // async function signup(e){
    // //     e.preventDefault()
    //      await fetch('http://localhost:8080/signup', {
    //         method: 'post',
    //         body: JSON.stringify({profileInput}),
    //         headers: {'Content-Type': "application/json"},
    //     })
    // }

    // const URL = `${process.env.REACT_APP_BACKEND_URI}/profile`;


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
        const response = await fetch('http://localhost:8080/profile', {
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
        // secureTextEntry={true}
        onChange={handleChange}
        name="password"
        placeholder="Password"/>
        <button>Signup</button>
    </form>
  )
}
export default SignupPage



