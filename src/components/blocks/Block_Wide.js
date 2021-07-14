import React from 'react'
import blockmobile from '../../images/block-wide-mobile.png'

export const Block_Wide = ({purple, left, text, image}) => {
    return (
        <>
    <div className={`${left&&'left'} ${purple&&'purple'} block-wide`}>
    {/* conditional renders */}                
        <div className='block-wide-text'>
            <button className={purple?'white-button':'purple-button'}>FOOD</button>
            <h1 className={`${left&&'text-right'}`}>{text}</h1>
            <span>By Square1</span>  
        </div>
        <picture>
            <source srcSet={image}
            media="(min-width: 1000px)" />
            <img className={` ${purple&&'purple-wide-image'} block-wide-image`} src={blockmobile} />
        </picture>   
    </div>
</>
    )
}

export default Block_Wide
