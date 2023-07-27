import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  return (
    <div className={styles.centr}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <a className={styles.text_menu}>{props.title}</a>
        </div>
      </div>
    </div>
  )
}
