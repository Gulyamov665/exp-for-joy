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
import Grill from '../Card/Grill'
import Appetizers from '../Card/Appetizers'
import Souces from '../Card/Souces'
import SideDishes from '../Card/SideDishes'
import Deserts from '../Card/Deserts'
import { useTranslation } from 'react-i18next'


export default function Slick() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (id) => {
    setToggleState(id)
  }
  const { t, i18n } = useTranslation()

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
              <Button title={t('navbar.salad')} />
            </div>
            <div onClick={() => toggleTab(6)}>
              <Button title={t('navbar.appetaizer')} />
            </div>
            <div onClick={() => toggleTab(2)}>
              <Button title={t('navbar.soups')} />
            </div>
            <div onClick={() => toggleTab(7)}>
              <Button title={t('navbar.sauce')} />
            </div>
            <div onClick={() => toggleTab(3)}>
              <Button title={t('navbar.nationalD')} />
            </div>
            <div onClick={() => toggleTab(4)}>
              <Button title={t('navbar.hotApp')} />
            </div>
            <div onClick={() => toggleTab(5)}>
              <Button title={t('navbar.onGrill')} />
            </div>{' '}
            <div onClick={() => toggleTab(8)}>
              <Button title={t('navbar.sDish')} />
            </div>{' '}
            <div onClick={() => toggleTab(9)}>
              <Button title={t('navbar.des')} />
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
      <div className={toggleState === 5 ? 'main' : 'no_active'}>
        <Grill />
      </div>
      <div className={toggleState === 6 ? 'main' : 'no_active'}>
        <Appetizers />
      </div>
      <div className={toggleState === 7 ? 'main' : 'no_active'}>
        <Souces />
      </div>
      <div className={toggleState === 8 ? 'main' : 'no_active'}>
        <SideDishes />
      </div>{' '}
      <div className={toggleState === 9 ? 'main' : 'no_active'}>
        <Deserts />
      </div>
    </div>
  )
}
