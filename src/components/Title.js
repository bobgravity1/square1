import React from 'react'
import arrow from '../images/arrow.svg'

const Title = ({text}) => {
    return (
        <div className='title'>
        <p className='title-text'>{text}</p>
        <div className='title-arrow'>
         <img src={arrow} alt='arrow right'/>
        </div>
        </div>
    )
}

export default Title
