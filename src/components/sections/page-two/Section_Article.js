import React, {useEffect, useState} from 'react'
// ads
import Ad_Disney from '../../ads/Ad_Disney.js'
import Ad_Farm from '../../ads/Ad_Farm.js'
// components
import Block_Banner from '../../blocks/Block_Banner'
import Block_Social from '../../blocks/Block_Social'
import Block_Main from '../../blocks/Block_Main'
import Block_Wide from '../../blocks/Block_Wide'
import Block_Paragraph from '../../blocks/Block_Paragraph'
// images
import image from '../../../images/block-image-article.png'
import disney from '../../../images/ad-disney.png'
import farm from '../../../images/ad-farm.png'
// section
import Section_Trending from '../page-one/Section_Trending'
import Section_News from '../page-one/Section_News'
//paragraph text
const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`
const paragraphTextOne=`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
const paragraphTextTwo=`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`

const Section_Article = () => {
    const [buttonText, setButtonText]=useState('Idle')
    // different button text depending on window width
    useEffect(()=>{
        if(window.innerWidth>1000){
            setButtonText('FOOD')
        }
    },[window.innerWidth])

    return (
        <>
        <div className='section-article'>
            <div className='section-article-container'>
                <Block_Banner image={image} text={sectionText} buttonText={buttonText} />
                <Block_Social />
                {/* all paragraphs are passed props for title, bold text, and content */}
                <Block_Paragraph bold text={paragraphTextOne} />
                <Block_Paragraph text={paragraphTextTwo} />
                <Block_Paragraph header text={paragraphTextTwo} />
                <div className='divide ad-margin'>
                <Ad_Disney image={disney} />
                </div>
                <Block_Paragraph header text={paragraphTextTwo} />
                <Block_Social />
                </div>
        </div>   
        </>
    )
}

export default Section_Article
