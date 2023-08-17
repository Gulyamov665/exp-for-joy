import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next'

export default function SideDishes() {
  const { t } = useTranslation()
  const Obj = t('sideDishes', { returnObjects: true })

  return <>
  {Obj.map((obj, i) => (
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
}
