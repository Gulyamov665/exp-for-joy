import React from 'react'
import secondCourse from '../../data/SecondCourse'
import Card from './Card'

function SecondCourse() {
  return (
    <>
      {secondCourse.map((obj, i) => (
        <div key={i}>
          <Card title={obj.name} price={obj.price} img={obj.img} key={obj.id} />
        </div>
      ))}
    </>
  )
}

export default SecondCourse
