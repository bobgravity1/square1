import React from 'react'
import Block_Video from '../../blocks/Block_Video'
import image from '../../../images/video.jpg'
import arrow from '../../../images/arrow.svg'

const sectionText=`Ask Us Anything: 13 Tips for Successfully Working From Home`

const Section_Videos = () => {
    return (
        <div className='section-videos'>
         <div className="section-videos-header">
                        <h1 className='section-videos-title'>Videos</h1>
                 <div className='title-arrow'>
                        <img src={arrow} alt='arrow right'/>
                 </div>
            </div> 
        <div className="section-videos-container">
                <Block_Video image={image} text={sectionText} /> 
                <Block_Video image={image} text={sectionText} /> 
                <Block_Video image={image} text={sectionText} /> 
            </div>
        </div>
    )
}

export default Section_Videos