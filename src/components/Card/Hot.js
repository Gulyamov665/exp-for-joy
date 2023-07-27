import React from 'react'
import Card from './Card'
import hot from '../../data/HotCourse'


function Hot() {
  return (
    <>
      {hot.map((obj, i) => (
        <div key={i}>
          <Card title={obj.name} price={obj.price} img={obj.img} key={obj.id} />
        </div>
      ))}
    </>
  )
}

export default Hot