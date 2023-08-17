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
        <div className={styles.div1}>
          <img className={styles.back} src="./img/card.png" alt="card" />
        </div>
        <div className={styles.div2}>
          <img
            className={styles.content}
            onClick={() => onClickImg(props.img)}
            src={props.img}
            alt="content"
          />
        </div>
        <div className={styles.div3}>
          <p>{props.title}</p><br />
          <b style={{textAlign: 'center'}}>{props.desc}</b>
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
