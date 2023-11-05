import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next'

function SaladsCard() {
  const { t } = useTranslation()
  const saladsObj = t('salads', { returnObjects: true })

  return (
    <>
      {saladsObj.map((obj, i) => (
        <div key={i}>
          <Card
            title={obj.name}
            price={obj.price}
            img={obj.img}
            desc={obj.description}
            new={obj.new}
            key={obj.id}
          />
        </div>
      ))}
    </>
  )
}

export default SaladsCard
