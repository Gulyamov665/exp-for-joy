import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.navbar}>
      <h4>Joy Chaikhana</h4>
      <div className={styles.contact}>
        <h4>About</h4>
        <h4>Contacts</h4>
      </div>
    </div>
  )
}

export default Header
