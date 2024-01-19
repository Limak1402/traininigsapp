import React, { useContext, useState } from "react";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
import Axios from "axios";
import Cookies from "js-cookie";

function LoginPage() {
  
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setisAdmin] = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
 
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    Axios.post("http://localhost:8081/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setError(response.data.message);
      } else {
        if (response.data[0].isadmin === 1) {
          console.log(response.data[0].isadmin);
          setisAdmin(1);
          Cookies.set("isAdmin", "true"); // store isAdmin state in a cookie
        } else {
          Cookies.set("isAdmin", "false");
          console.log(isAdmin);
        }
        setError("");
        navigate("/homePage");
      }
    });
  }


  return (
    <>
      <header class="headerLogin">
        <h1 class="h1Login">Welcome</h1>
        <img src={require("../images/logo_transparent.png")} alt="Logo" class="logoLogin" />
      </header>

      <main class="mainLogin">
        <div class="containerLogin">
          <p class="pLogin">Username</p>
          <input
            class="inputBoxLogin"
            type="text"
            name="Username"
            onChange={handleUserName}
          ></input>
          <p class="pLogin">Password</p>
          <input
            class="inputBoxLogin"
            type="password"
            onChange={handlePassword}
          ></input>
          <button class="logInButton" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </main>
      <p class="loginPageError">{error}</p>
    </>
  );
}

export default LoginPage;
