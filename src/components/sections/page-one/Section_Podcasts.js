import React from 'react'
import Block_Foodcast from '../../blocks/Block_Foodcast'
import imagefood from '../../../images/block-image-food.png'
import arrow from '../../../images/arrow.svg'

const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`

const Section_Podcasts = () => {
    return (
        <div className='section-podcasts'>
            <div className="section-podcasts-header">
                        <h1 className='section-podcasts-title'>Podcasts</h1>
                 <div className='title-arrow'>
                        <img src={arrow} alt='arrow right'/>
                 </div>
            </div> 
        <div className="section-podcasts-container">
        <Block_Foodcast image={imagefood} text={sectionText} />
        <Block_Foodcast image={imagefood} text={sectionText} />
        <Block_Foodcast image={imagefood} text={sectionText} />  
        <Block_Foodcast image={imagefood} text={sectionText} />
        {/* <Block_Main number text={sectionText} />*/}
        </div>
    </div>
    )
}

export default Section_Podcasts
