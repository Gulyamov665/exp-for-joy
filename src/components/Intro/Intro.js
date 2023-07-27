import React from 'react'
import styles from './Intro.module.css'

function Intro() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <img className={styles.img} src="./img/project_images/transparent.png" />
      </div>
    </div>
  )
}

export default Intro
