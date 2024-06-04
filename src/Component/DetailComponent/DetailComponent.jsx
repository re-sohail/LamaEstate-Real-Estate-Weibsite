import React from 'react'
import LeftSIde from '../DetailProduct/LeftSIde'
import RightSide from '../DetailProduct/RightSide'

function DetailComponent() {
  return (
    <div className='w-[1300px] flex items-start justify-between mx-auto'>
        <LeftSIde />
        <RightSide />
    </div>
  )
}

export default DetailComponent