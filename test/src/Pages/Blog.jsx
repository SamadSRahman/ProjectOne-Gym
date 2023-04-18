import React from 'react'
import styles from './blog.module.css'
import { blogBgImg , blogData} from '../data/blogData'

const Blog = () => {
  return (
    <div className={styles.background}>
      
      <div className={styles.container} >
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
    </div>
  )
}

export default Blog
