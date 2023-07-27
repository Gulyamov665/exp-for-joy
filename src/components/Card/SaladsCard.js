import React from 'react'
import salats from '../../data/Salads'
import Card from './Card'

function SaladsCard() {
  return (
    <>
      {salats.map((obj, i) => (
        <div key={i}>
          <Card title={obj.name} price={obj.price} img={obj.img} key={obj.id} />
        </div>
      ))}
    </>
  )
}

export default SaladsCard
