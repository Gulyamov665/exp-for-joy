import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next'

export default function Grill() {
  const { t } = useTranslation()
  const dishes = t('dishesOnTheGrill', { returnObjects: true })
  return (
    <>
      {dishes.map((obj, i) => (
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
