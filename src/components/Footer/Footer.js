import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.adress}>
        Ул.Гаукушан, Г.Бухара <br />
        998-93-6213333
        <br />
        contact@example.com
        <br />
      </div>

      <div className={styles.w_days}>
        Monday-Friday: 9AM-9PM
        <br />
        Saturday: 9AM - 11PM
        <br />
        Sunday: 9AM - 11PM
        <br />
        Happy Hours: 9AM - 12AM
        <br />
      </div>
    </div>
  )
}
