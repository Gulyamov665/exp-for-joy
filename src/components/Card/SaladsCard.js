import React from 'react'
import salats from '../../data/Salads'
import Card from './Card'
import { useTranslation } from 'react-i18next'

function SaladsCard() {
  const { t } = useTranslation()
  const saladsObj = t('salads', {returnObjects: true})

  return (
    <>
      {saladsObj.map((obj, i) => (
        <div key={i}>
          <Card
            title={obj.name}
            price={obj.price}
            img={obj.img}
            key={obj.id}
          />
        </div>
      ))}
    </>
  )
}

export default SaladsCard
