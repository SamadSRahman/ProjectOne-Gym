import React, { Fragment } from "react";
import styles from "./reviews.module.css";
import { blogData, blogBgImg } from "../../data/blogData";
import ScrollToTop from "../../Components/ScrollRestore/ScrollRestore";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { Button } from "../../Components/Button";
import { useEffect } from "react";
import { useState } from "react";

function handleRightClick() {
  document.getElementById("container").scrollLeft += 400;
}
function handleLeftClick() {
  document.getElementById("container").scrollLeft -= 400;
}

function Reviews() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (count < blogBgImg.length - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 3000);
  }, [count]);

  return (
    <Fragment>
      <ScrollToTop />
      <div className={styles.headingWrapper}>
        <div className={styles.headingText}>
          <span>Reviews</span>
          <label>See what our members have to say about us.</label>
        </div>
        <img src={blogBgImg[count]} alt="background img" />
      </div>
      <div className={styles.background}>
        <Button
          func={handleLeftClick}
          class="scrollBtn"
          text={<BsChevronDoubleLeft size={40}  color={ "rgb(131, 9, 9)"} />}
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
          text={<BsChevronDoubleRight size={40} color={ "rgb(131, 9, 9)"} />}
         
        />
       
      </div>
    </Fragment>
  );
}
export default Reviews;
