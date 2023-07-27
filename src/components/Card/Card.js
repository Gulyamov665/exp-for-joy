import styles from './Card.module.css'
import React, { useState } from 'react'
import { ReactComponent as Heart } from './img/heart.svg'

function Card(props) {
  const [like, setLike] = useState(true)

  const onClickLike = () => {
    setLike(!like)
  }
  return (
    <div className={styles.card}>
      <div className={styles.div3}>
        <img className={styles.content} src={props.img} alt="content" />
        <p>{props.title}</p>
        <div className={styles.grid}>
          <b>{props.price} UZS</b>
          <div className={styles.heart} onClick={onClickLike}>
            {like ? (
              <Heart className={styles.unfill} width={30} height={30} />
            ) : (
              <Heart className={styles.fill} width={30} height={30} />
            )}
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Card
