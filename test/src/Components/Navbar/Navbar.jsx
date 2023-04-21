import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRecoilState } from "recoil";
import { isLogged } from "../../data/atom";
import { isShow } from "../../data/atom";

export function Navbar1() {
  const [isVisible, setIsvisible] = useState(false);
  const value =
    "https://image.similarpng.com/very-thumbnail/2021/07/Fitness-Gym-logo-design-template-on-transparent-background-PNG.png";
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogged);
  const [isLogin, setIsLogin] = useRecoilState(isShow);

  function handleLoginClick() {
    if (isLoggedIn == true) {
      alert("Are you sure you want to Logout?");
    }
    setIsLogin(true);
    setIsLoggedIn(false);
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={value} alt="" />
          </Link>
        </div>
        <div className={styles.linkWrapper}>
          <div className={styles.linksContainer}>
            <Link to="/">
              <a>Home</a>
            </Link>
            <Link to="/aboutus">
              <a>About Us</a>
            </Link>
            <Link to="/classes">
              <a>Classes</a>
            </Link>
            <Link to="/reviews">
              <a>Reviews</a>
            </Link>
          </div>

          <div className={styles.btnWrapper}>
            <Link to="/register">
              <a onClick={handleLoginClick} className="button">
                {isLoggedIn ? "Logout" : "Login"}
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.menuBtnWrapper}>
          <a onClick={() => setIsvisible(!isVisible)} className="button">
            {isVisible ? "❌" : <GiHamburgerMenu />}
          </a>
        </div>
      </div>
      <div
        className={styles.menuWrapper}
        style={isVisible ? {} : { display: "none" }}
      >
        <Link to="/">
          <label onClick={() => setIsvisible(!isVisible)}>Home</label>
        </Link>
        <Link to="/aboutus">
          <label onClick={() => setIsvisible(!isVisible)}>About Us</label>
        </Link>
        <Link to="/classes">
          <label onClick={() => setIsvisible(!isVisible)}>Classes</label>
        </Link>
        <Link to="/reviews">
          <label onClick={() => setIsvisible(!isVisible)}>Reviews</label>
        </Link>
        <Link to="/register">
          <label
            onClick={() => {
              if (isLoggedIn == true) {
                alert("Are you sure you want to Logout?");
              }
              setIsvisible(!isVisible);
              setIsLogin(true);
              setIsLoggedIn(false);
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </label>
        </Link>
      </div>
    </div>
  );
}
