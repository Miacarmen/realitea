import React from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { BsSuitHeartFill } from 'react-icons/bs';


const IconToggle = () => {
  return (
    <div>
        <div className='toggle-wrapper'>
            <BsSuitHeart size={'20px'} />

            <BsSuitHeartFill size={'20px'} />
        </div>
    </div>
  )
}

export default IconToggle