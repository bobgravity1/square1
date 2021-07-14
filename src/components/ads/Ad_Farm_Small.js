import React from 'react'
import adfarm from '../../images/ad-farm.png'
import adfarmsmall from '../../images/ad-farm-small.png'
import addisney from '../../images/ad-disney.png'

const Ad_Farm_Small = ({same}) => {
    return (
    <>      
        <div className='adfarm-small'> 
            
        <div className='adfarm-small-container'>
            {/* conditional render for small ad on second page */}
            <h1>ADVERTISEMENT</h1>
            <picture >
                    <source srcSet={adfarm} alt='kitchen picture' 
                    media="(min-width: 1300px)" />
                    <div className="adfarm-small-image">                
                    <img className='adfarm-image adfarm-image-image' src={adfarmsmall} alt='farm ad'/>
                    </div> 
                </picture>
            </div>
        </div>
    </>
    )
}

export default Ad_Farm_Small