import React from 'react'

function TimeAndDate() {
 let time= new Date();
  return (
    <div className='text-center div-margin text-font'>This is the Current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()} </div>
  )
}

export default TimeAndDate