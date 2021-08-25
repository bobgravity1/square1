//imports
import React from 'react'
import {Link} from 'react-router-dom'

// ad components
import Layout from '../components/Layout.js'
import Ad_Farm from '../components/ads/Ad_Farm.js'
import Ad_Marvel from '../components/ads/Ad_Marvel.js'
import Ad_Farm_Small from '../components/ads/Ad_Farm_Small.js'

// page sections
import Section_Top from '../components/sections/page-one/Section_Top'
import Section_News from '../components/sections/page-one/Section_News'
import Section_Videos from '../components/sections/page-one/Section_Videos'
import Section_Podcasts from '../components/sections/page-one/Section_Podcasts'
import Section_Trending from '../components/sections/page-one/Section_Trending'
import Section_Happening from '../components/sections/page-one/Section_Happening'
import Section_Entertainment from '../components/sections/page-one/Section_Entertainment'

const PageOne = () => {
    return (
        <div>
            <Layout>
            <Link to='/pageTwo'>
                <Ad_Marvel />
                <Section_Top  />
                <Ad_Farm />
                <Section_News title='News' />
                <div className='ad-margin'>
                <Section_Trending />
                </div>
                <Ad_Farm />
                <Section_Happening />
                <Section_Entertainment /> 
            <div className="desktop">       
                <Ad_Farm />  
            </div>  
                <Section_Videos />     
            <div className="mobile">      
                <Ad_Farm /> 
            </div>    
                <Section_Podcasts />  
                <div className='mobile'>
                <Ad_Farm_Small />
                </div>
            </Link>      
            </Layout>
        </div>
    )
}

export default PageOne