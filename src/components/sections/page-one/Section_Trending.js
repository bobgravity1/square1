import React from 'react'
import Block_Text from '../../blocks/Block_Text'
import image from '../../../images/block-image-main.png'

const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`

const Section_Trending = ({less}) => {
    return (
    <div className='section-trending'>
        <h1 className={`${less&&'less'} section-trending-title`}>Trending</h1>
        <div className='section-trending-container'>
            <Block_Text text={sectionText} /> 
            <Block_Text text={sectionText}/> 
            <Block_Text text={sectionText}/> 
            <Block_Text text={sectionText}/> 
            {/* <Block_Main number text={sectionText} />*/}
        </div>
     
    </div>
    )
}

export default Section_Trending
