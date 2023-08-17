import React from 'react'
import firstCourse from '../../data/FirstCourse'
import Card from './Card'
import { useTranslation } from 'react-i18next'

function FirstCourse() {
  const { t } = useTranslation()
  const soupObj = t('soup', { returnObjects: true })

  return (
    <>
      {soupObj.map((obj, i) => (
        <div key={i}>
          <Card
            title={obj.name}
            price={obj.price}
            img={obj.img}
            desc={obj.description}
            key={obj.id}
          />
        </div>
      ))}
    </>
  )
}

export default FirstCourse
