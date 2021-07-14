import React from 'react'
import Block_Main from '../../blocks/Block_Main'
import image from '../../../images/block-image-main.png'

const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`

const Section_Happening = () => {
    return (
        <div className='section-happening'>
            <div className="section-happening-container">
            <h1 className='section-happening-title'>What's Happening</h1>
            <div className="section-happening-flex">
                <Block_Main image={image} text={sectionText} /> 
                <Block_Main image={image} text={sectionText} /> 
                <Block_Main image={image} text={sectionText} /> 
                <Block_Main image={image} text={sectionText} />   
            </div>
        </div>
        </div>
    )
}

export default Section_Happening
