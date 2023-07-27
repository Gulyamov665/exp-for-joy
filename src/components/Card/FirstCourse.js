import React from 'react'
import firstCourse from '../../data/FirstCourse'
import Card from './Card'

function FirstCourse() {
  return (
    <>
      {firstCourse.map((obj, i) => (
        <div key={i}>
          <Card title={obj.name} price={obj.price} img={obj.img} key={obj.id} />
        </div>
      ))}
    </>
  )
}

export default FirstCourse
