import React from 'react'
import mobile from '../../images/block-image-article-mobile.png'
import author from '../../images/block-image-article-author.png'

const Block_Article = ({text, image, buttonText}) => {
    return (
        <div className="block-article">
            <button className='purple'>{buttonText}</button>  
            <h1>{text}</h1>
            <picture>
                <source srcSet={image} alt='kitchen picture' 
                media="(min-width: 1300px)" />
                <img className='block-main-image' alt='kitchen picture' src={mobile} />
            </picture> 
            <div className="block-article-author">
                <img src={author} />
                <div className="block-article-date">
                    <h2>By Square1</h2>
                    <h3>Apr 29, 2021 1:41 PM</h3>
                </div>
            </div>
        </div>
    )
}

export default Block_Article
