import React, { Fragment } from "react";
import styles from "./reviews.module.css";
import { blogData, blogBgImg } from "../data/blogData";
import Footer from "./Footer";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { Button } from "../Components/Button";
import { useEffect } from "react";
import { useState } from "react";


function handleRightClick() {
  document.getElementById("container").scrollLeft += 500;
 
}
function handleLeftClick() {
  document.getElementById("container").scrollLeft -= 500;
  
}


const Reviews = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
   
    setTimeout(() => {
      if (count < blogBgImg.length - 1) {
        setCount(count + 1)
        
      }
      else {
        setCount(0)
      }
      }, 3000)
    
  },[count])

  return (
    <Fragment>
      <div className={styles.headingWrapper}>
      <h1>Reviews</h1>
        <img src={blogBgImg[count]} alt="background img" />
       
      </div>
      <div className={styles.background}>
        <Button
          func={handleLeftClick}
          class="scrollBtn"
          text={<BsChevronDoubleLeft size={40} />}
        />
        <div id="container" className={styles.container}>
          {blogData.map((ele) => (
            <div className={styles.wrapper}>
              <div className={styles.imgWrapper}>
                <img src={ele.img} />
              </div>
              <div className={styles.text}>
                <h1>{ele.name}</h1>
                <p>{ele.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          func={handleRightClick}
          class="scrollBtn"
          text={<BsChevronDoubleRight size={40} />}
        />
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

export default Reviews;
