import React from 'react'


const Block_Video = ({image, text}) => {
    return (
        <>  
        <div className='block-video'>
                {/* conditional renders */}       
                <img src={image} />
                <div className='block-video-text'>
                <button className='block-video-button'>VIDEO</button>
                <h1>{text}</h1>
            </div>
        </div>
        </>
    )
}

export default Block_Video

