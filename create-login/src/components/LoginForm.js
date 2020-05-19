import React, { useState } from "react";
import axios from "axios"

const initialFormInputs = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [loginInputs, setLoginInputs] = useState(initialFormInputs);
    const [isLoading, setIsLoading] = useState(false)

  const changeLogin = (event) => {
    setLoginInputs({
      ...loginInputs,
      [event.target.name]: event.target.value,
    });
  };

  const submitLogin = (event) => {
      event.preventDefault()
      axios.get("")
      .then(res => {
          console.log(res)
        localStorage.setItem(loginInputs)
      })
      .catch(err => {
          console.log(err)
      })
      
  }

  return (
    <form onSubmit={submitLogin}>
      <label htmlFor="username">Username:</label>
      <input
        name="username"
        value={loginInputs.username}
        onChange={changeLogin}
      />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        value={loginInputs.password}
        onChange={changeLogin}
      />
      <button>LOG IN</button>
    </form>
  );
}
