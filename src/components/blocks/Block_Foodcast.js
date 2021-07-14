import React from 'react'
import mobile from '../../images/block-podcast-mobile.png'

export const Block_Foodcast = ({image, buttonText}) => {
    return (
        <>  
        <div className='block-food'>     
            <picture>
                <source srcSet={image}
                media="(min-width: 1300px)" />
                <img src={mobile} alt='kitchen picture' />
            </picture>
            <div className='block-food-text'>
                <h1>Foodcast</h1>
                <button className='block-food-button'>LISTEN</button>
            </div>
        </div>
        </>
    )
}

export default Block_Foodcast