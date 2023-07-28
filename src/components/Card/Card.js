import styles from './Card.module.css'
import React, { useState } from 'react'
import { ReactComponent as Heart } from './img/heart.svg'

function Card(props) {
  const [like, setLike] = useState(true)
  const [img, setImg] = useState(true)

  const onClickLike = () => {
    setLike(!like)
  }

  const onClickImg = () => {
    setImg(!img)
  }
  return (
    <div className={styles.card}>
      <div className={styles.div3}>
        <img
          onClick={onClickImg}
          className={img ? styles.content : styles.imgFull}
          src={props.img}
          alt="content"
        />
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
