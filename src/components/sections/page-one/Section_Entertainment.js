import React from 'react'

// components
import Block_Main from '../../blocks/Block_Main'
import Block_Wide from '../../blocks/Block_Wide'
// ads
import Ad_Disney from '../../ads/Ad_Disney.js'
// images
import image from '../../../images/block-image-main.png'
import imagewide from '../../../images/block-image-wide.png'
import imagewideleft from '../../../images/block-image-wide-left.png'
import addisney from '../../../images/ad-disney.png'
import arrow from '../../../images/arrow.svg'

const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`


const Section_Entertainment= () => {
    return (
        <div className='section-entertainment'>
            <div className="section-entertainment-header">
                <h1 className='section-entertainment-title'>Entertainment</h1>
                <div className='title-arrow'>
                    <img src={arrow} alt='arrow right'/>
                </div>
            </div>           
            <div className="section-entertainment-container">
            <Block_Main image={image} text={sectionText} />
            {/* refer to _reboot.scss */}
            <div className="desktop"> 
            <Block_Wide  image={imagewide} text={sectionText} /> 
            </div>
            </div> 
            <div className="section-entertainment-container">
            <Block_Main image={image} text={sectionText} />
            <Block_Main image={image} text={sectionText} />
            <Block_Main image={image} text={sectionText} />
            {/* refer to _reboot.scss */}
            <div className="mobile">
            <Block_Main image={image} text={sectionText} /> 
            </div>
            
            <Ad_Disney image={addisney} text={sectionText} />
            {/* <Block_Main number text={sectionText} />*/}
            </div>         
        </div>
    )
}

export default Section_Entertainment