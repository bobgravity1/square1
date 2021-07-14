import React from 'react'
// ads
import Ad_Farm_Small from '../../ads/Ad_Farm_Small.js'
import Ad_Farm from '../../ads/Ad_Farm.js'
// section
import Section_News from '../page-one/Section_News'

const Section_Bottom = ({title}) => {
    return (
        <div className="section-bottom">
        <div className='ad-margin desktop'>
        <Ad_Farm />
        </div>
        <Section_News more title={title} />
        <div className='mobile'>
        <Ad_Farm_Small />
        </div>
        </div>
    )
}


export default Section_Bottom