import React from 'react'
import blockmobile from '../../images/block-main-mobile.png'

export const Block_Side = ({text, image}) => {
    return (
        <>
    <div className='block-side'>            
        <div className='block-side-text'>
            <button className='purple-button'>FOOD</button>
            <h1 >{text}</h1>
            <span>By Square1</span>  
        </div>
            <picture>
                <source srcSet={image} alt='kitchen picture' 
                media="(min-width: 1300px)" />
                <img className='block-side-image' src={blockmobile} />
            </picture> 
    </div>
</>
    )
}

export default Block_Side