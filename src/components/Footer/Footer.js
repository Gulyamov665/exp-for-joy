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
