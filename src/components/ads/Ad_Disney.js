import React from 'react'
import addisney from '../../images/ad-disney.png'

const Ad_Disney = ({image}) => {
    return (
        <div className='ad-disney'>
            <img src={image} alt='disney ad' /> 
        </div>
    )
}

export default Ad_Disney