import React from 'react'
import adfarm from '../../images/ad-farm.png'
import adfarmsmall from '../../images/ad-farm-small.png'
import addisney from '../../images/ad-disney.png'

const Ad_Farm = ({same}) => {
    return (
    <>      
        <div className='adfarm'> 
            <h1>ADVERTISEMENT</h1>
        <div className='adfarm-image-container'>
                <picture >
                    <source srcSet={adfarm} alt='kitchen picture' 
                    media="(min-width: 1300px)" />
                    <img className='adfarm-image' src={addisney} alt='farm ad'/>
                </picture>
            </div>
        </div>
    </>
    )
}

export default Ad_Farm