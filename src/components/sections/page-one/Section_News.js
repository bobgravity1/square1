import React from 'react'

//components
import Block_Main from '../../blocks/Block_Main'
import Block_Wide from '../../blocks/Block_Wide'
import Ad_Disney from '../../ads/Ad_Disney'

//images
import image from '../../../images/block-image-main.png'
import arrow from '../../../images/arrow.svg'
import addisney from '../../../images/ad-disney.png'
import imagewide from '../../../images/block-image-wide.png'
import imagewideleft from '../../../images/block-image-wide-left.png'

const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`

const Section_News = ({title}) => {
    return (
        <div className='section-news'>
           <div className="section-news-header">
                    <h1 className='section-news-title'>{title}</h1>
                <div className='title-arrow'>
                    <img src={arrow} alt='arrow right'/>
                </div>
            </div>
            <div className="section-news-container">
                    {/* refer to _reboot.scss */}
                    <div className="desktop">
                     <Block_Wide  left image={imagewideleft} text={sectionText} />   
                    </div>
                    <Block_Main image={image} text={sectionText} />
            </div>
            <div className="p section-news-container">
                    <Block_Main image={image} text={sectionText} />
                    <Block_Main image={image} text={sectionText} /> 
            <div className='position margin'>
                    <Block_Main image={image} text={sectionText} />
            </div>
                {/* refer to _reboot.scss */}
            <div className="mobile">
                    <Block_Main  image={image} text={sectionText} />
            </div>
                    <Ad_Disney image={addisney} text={sectionText} />
            </div>
                <hr  />
        </div>
    )
}

export default Section_News