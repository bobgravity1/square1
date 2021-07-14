import React from 'react'
import ad from '../../images/ad-banner.png'

const Ad = () => {
    return (
    <>      
        <div className='ad'> 
            <h1>ADVERTISEMENT</h1>
            <div className='ad-image-container'>
                <img className='ad-image' src={ad} alt='marvel ad'/>
            </div>
        </div>
    </>
    )
}

export default Ad
