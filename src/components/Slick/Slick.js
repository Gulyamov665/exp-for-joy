import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Slick.module.css'
import Button from '../Button/Button'
import React, { useState } from 'react'
import SaladsCard from '../Card/SaladsCard'
import FirstCourse from '../Card/FirstCourse'
import SecondCourse from '../Card/SecondCourse'
import Hot from '../Card/Hot'

export default function Slick() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (id) => {
    setToggleState(id)
  }

  const settings = {
    className: 'center',
    centerPadding: '60px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <div className={styles.test}>
      <div className={styles.custom}>
        <div>
          <Slider {...settings}>
            <div onClick={() => toggleTab(1)}>
              <Button title="Салаты" />
            </div>

            <div onClick={() => toggleTab(2)}>
              <Button title="Первые блюда" />
            </div>
            <div onClick={() => toggleTab(3)}>
              <Button title="Вторые блюда" />
            </div>
            <div onClick={() => toggleTab(4)}>
              <Button title="Горячие закуски" />
            </div>
            <div>
              <Button title="Напитки" />
            </div>
          </Slider>
        </div>
      </div>

      <div className={toggleState === 1 ? 'main' : 'no_active'}>
        <SaladsCard />
      </div>
      <div className={toggleState === 2 ? 'main' : 'no_active'}>
        <FirstCourse />
      </div>
      <div className={toggleState === 3 ? 'main' : 'no_active'}>
        <SecondCourse />
      </div>
      <div className={toggleState === 4 ? 'main' : 'no_active'}>
        <Hot />
      </div>
    </div>
  )
}
