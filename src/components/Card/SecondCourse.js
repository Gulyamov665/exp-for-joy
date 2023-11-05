import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next'

function SecondCourse() {
  const { t } = useTranslation()
  const second = t('national', { returnObjects: true })
  return (
    <>
      {second.map((obj, i) => (
        <div key={i}>
          <Card
            title={obj.name}
            price={obj.price}
            desc={obj.description}
            img={obj.img}
            new={obj.new}
            key={obj.id}
          />
        </div>
      ))}
    </>
  )
}

export default SecondCourse
