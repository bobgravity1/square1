import React from 'react'

// components
import Block_Main from '../../blocks/Block_Main'
import Block_Wide from '../../blocks/Block_Wide'
import Block_Side from '../../blocks/Block_Side'

// images
import image from '../../../images/block-image-main.png'
import imagewideleft from '../../../images/block-image-wide-left.png'
import imageside from '../../../images/block-image-side.png'

const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`


const Section_Top = () => {
    return (
        <div className='section-top'>
            <div className="section-top-container">       
            <Block_Wide purple left image={imagewideleft} text={sectionText} />  
            <Block_Main image={image} text={sectionText} />
        
            {/* <Block_Main number text={sectionText} />*/}
            <Block_Side image={imageside} text={sectionText} />
            <Block_Side image={imageside} text={sectionText} />
            </div>
        </div>
    )
}

export default Section_Top
