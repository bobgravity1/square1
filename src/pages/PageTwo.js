import React from 'react'
import {Link} from 'react-router-dom' 

// ad components
import Ad_Farm from '../components/ads/Ad_Farm.js'
import Ad_Disney from '../components/ads/Ad_Disney.js'
import Ad_Marvel from '../components/ads/Ad_Marvel.js'

// page sections
import Layout from '../components/Layout.js'
import Section_Bottom from '../components/sections/page-two/Section_Bottom'
import Section_News from '../components/sections/page-one/Section_News'
import Section_Article from '../components/sections/page-two/Section_Article'
import Section_Extended from '../components/sections/page-two/Section_Extended'

const sectionText=`13 Tips for Successfully Working From Home When You're in the Food Industry`

const PageTwo= () => {
    return (
        <div>
        <Layout>
        <Link to='/'>
            <Ad_Marvel />
            <div className='pagetwo-flex'>
            <Section_Article />
            <div className='extended-margin'>
            <Section_Extended  />
            </div>
            </div>
            <Section_Bottom title='More in News'/>
        </Link>
        </Layout>
        </div>
    )
}

export default PageTwo
