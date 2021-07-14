import React from 'react'
// ads
import Ad_Disney from '../../ads/Ad_Disney.js'
import Ad_Farm from '../../ads/Ad_Farm.js'
import Ad_Farm_Small from '../../ads/Ad_Farm_Small.js'
// images
import image from '../../../images/block-image-article.png'
import disney from '../../../images/ad-disney.png'
import farm from '../../../images/ad-farm.png'
// section
import Section_Trending from '../page-one/Section_Trending'
import Section_News from '../page-one/Section_News'
//paragraph text
const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`

const Section_Extended = ({title}) => {
    return (
        <div className='section-extended'>
            <div className='ad-margin'>
            <Ad_Disney image={disney} text={sectionText} />
            </div>
            <Section_Trending less/>
            <div className='ad-margin'>
            <Ad_Disney image={disney} text={sectionText} />
            </div>
        </div>
    )
}

export default Section_Extended
