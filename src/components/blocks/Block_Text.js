import React from 'react'
import blockmobile from '../../images/block-main-mobile.png'

const numbers=[1,2,3,4]
const Block_Text = ({image, text, number}) => {
    return (
        <>  
        <div className='block-text'>
                {/* conditional renders */}
                <div className='block-text-number'>1</div>     
                <button className='block-text-food-desktop'>FOOD</button>
            <div className='block-text-text'>
                <h1>{text}</h1>
                <span>By Square1</span>  
            </div>
        </div>
        </>
    )
}

export default Block_Text