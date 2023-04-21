import React, { useState } from "react";
import { InputField } from "../../Components/InputField";
import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLogged } from "../../data/atom";
import { isShow } from "../../data/atom";
import ScrollToTop from "../../Components/ScrollRestore/ScrollRestore";

export function Registration() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogged)
  const propsData = [
    "Email: ",
    "First Name: ",
    "Last Name: ",
    "Password: ",
    "Confirm Password: ",
  ];
  const type = ["email", "text", "text", "password"];
  const [isLogin, setIsLogin] = useRecoilState(isShow)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const rawData = { ...data }
  
  function handleSubmit(event) {
    const users = getUsers();
    event.preventDefault();
    if (!data.email || !data.firstName || !data.lastName || !data.password) {
      alert("Please fill out all the details");
      return;
    }
    
    else if (data.password.length <= 7) {
      alert("Password should contain atleat 8 characters");
    } else if (data.password !== confirmPass) {
      alert("Password and Confirm Password do not match");
    }
    else if(users.find((ele)=>ele.email===data.email)){
        alert("User with this Email already exist")
      }
    else {
      const users = getUsers();
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      setIsLogin(!isLogin);
      alert("Registration Succesfull")
    }
  }
  function handleEmailChange(event) {
    const input = { ...data };
    input.email = event.target.value;
    setData(input);
  }
  function handleFirstNameChange(event) {
    const input = { ...data };
    input.firstName = event.target.value;
    setData(input);
  }
  function handleLastNameChange(event) {
    const input = { ...data };
    input.lastName = event.target.value;
    setData(input);
  }
  function handlePasswordChange(event) {
    const input = { ...data };
    input.password = event.target.value;
    setData(input);
  }
  function handleConfirmPasswordChange(event) {
    setConfirmPass(event.target.value);
  }
  function getUsers() {
    const users = localStorage.getItem("users"); // getting data
    try {
      if (users) {
        // users is there
        return JSON.parse(users); // parsing 
      }
    } catch (error) {
      return [];
    }
    return [];
  }

  function handleLogin(e) {
    e.preventDefault();
    const users = getUsers();

    let currentUser = users.find((ele) => ele.email == email);
    if (!currentUser) {
      alert("No User Found");
    } else if (currentUser.password === password) {
      alert("Login Succesfull");
      navigate("/");
      setIsLoggedIn(true)
    } else {
      alert("Incorrect Email or Password");
    }
  }

  return (
    <div>
      <ScrollToTop/>
      <div className={styles.wrapper}>
        {isLogin ? (
          <div className={styles.loginWrapper}>
            <form onSubmit={(e) => handleLogin(e)} className={styles.loginForm}>
              <h1 className={styles.heading}>Login</h1>

              <InputField
                func={(e) => setEmail(e.target.value)}
                type={type[0]}
                label={propsData[0]}
              />
              <InputField
                func={(e) => setPassword(e.target.value)}
                type={type[3]}
                label={propsData[3]}
              />
              <InputField type="submit" class="submitBtn" />
              <span>Don't have an account? </span>
              <span
                className={styles.linkSpan}
                onClick={() => setIsLogin(!isLogin)}
              >
                Register
              </span>
            </form>
          </div>
        ) : (
          <div className={styles.registerWrapper}>
            <form className={styles.regForm} onSubmit={handleSubmit} action="">
              <h1 className={styles.heading}>Register</h1>
              <InputField
                func={handleEmailChange}
                type={type[0]}
                label={propsData[0]}
              />
              <InputField
                func={handleFirstNameChange}
                type={type[1]}
                label={propsData[1]}
              />
              <InputField
                func={handleLastNameChange}
                type={type[2]}
                label={propsData[2]}
              />
              <InputField
                func={handlePasswordChange}
                type={type[3]}
                label={propsData[3]}
              />
              <InputField
                func={handleConfirmPasswordChange}
                type={type[3]}
                label={propsData[4]}
              />
              <InputField type="submit" class="submitBtn" /> <br />
              <span>Already have an Account? </span>
              <span
                className={styles.linkSpan}
                onClick={() => setIsLogin(!isLogin)}
              >
                Login
              </span>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
