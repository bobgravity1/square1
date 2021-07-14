import React from 'react'
import blockmobile from '../../images/block-main-mobile.png'


const Block_Main = ({image, text}) => {
    return (
        <>  
        <div className='block-main'>
                {/* conditional renders */}       
            <picture>
                <source srcSet={image} alt='kitchen picture' 
                media="(min-width: 1300px)" />
                <img className='block-main-image' src={blockmobile} />
            </picture> 
            <div className='block-main-text'>
                <button className='block-main-food-desktop'>FOOD</button>
                <h1>{text}</h1>
                <span>By Square1</span>  
            </div>
        </div>
        </>
    )
}

export default Block_Main
