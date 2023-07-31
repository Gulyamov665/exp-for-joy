import styles from './Card.module.css'
import React, { useState } from 'react'
import { ReactComponent as Heart } from './img/heart.svg'
import CloseIcon from '@mui/icons-material/Close'

function Card(props) {
  const [like, setLike] = useState(true)
  const [model, setModel] = useState(false)
  const [imgSrc, setImgSrc] = useState('')

  const onClickLike = () => {
    setLike(!like)
  }

  const onClickImg = (img) => {
    setImgSrc(img)
    setModel(true)
  }
  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={imgSrc} alt="content" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className={styles.card}>
        <div className={styles.div3}>
          <img
            onClick={() => onClickImg(props.img)}
            className={styles.content}
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
    </>
  )
}

export default Card
