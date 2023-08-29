import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.adress}>
        Adress: Sarafon 2, Buxoro <br />
        Contacts: +998881830200
        <br />
        <br />
        <br />
        <a href="https://www.tripadvisor.ru/UserReviewEdit-g303936-d25439623-JOY_Chaikhana_Lounge-Bukhara_Bukhara_Province.html#">
          <img
            className={styles.img}
            width={40}
            height={40}
            src={'./img/project_images/tripadvisor.png'}
            alt="tripadvisor"
          />
        </a>
        <a href="https://instagram.com/joy.bukhara?igshid=MzRlODBiNWFlZA==">
          <img
            className={styles.img}
            width={40}
            height={40}
            src={'./img/project_images/instagram.png'}
            alt="tripadvisor"
          />
        </a>
        <a href="https://maps.google.com/maps?q=39.772381,64.419496&ll=39.772381,64.419496&z=16">
          <img
            className={styles.img}
            width={40}
            height={40}
            src={'./img/project_images/pin.png'}
            alt="tripadvisor"
          />
        </a>
      </div>

      <div className={styles.w_days}>
        Monday-Friday: 11:00 - 23:00
        <br />
        Saturday: 11:00 - 23:00
        <br />
        Sunday: 11:00 - 23:00
        <br />
      </div>
    </div>
  )
}
