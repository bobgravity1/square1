import React from 'react'
import facebook from '../../images/facebook-color.svg'
import twitter from '../../images/twitter-color.svg'
import whatsapp from '../../images/whatsapp-color.svg'
import reddit from '../../images/reddit-color.svg'
import pinterest from '../../images/pinterest-color.svg'

const text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
id est laborum.`

const Block_Social = ({paragraph}) => {
    return (
        <div className='block-social'>
            {paragraph&&<p>sad;lnasdlk;fnsadfnsal;fnasl;n</p>}
            <hr />
            <div className='block-social-container'>
                <div>
            <h1>Share this article</h1>
                </div>
                <div>
                <img src={facebook} />
                <img src={twitter} />
                <img src={whatsapp} />
                <img src={reddit} />
                <img src={pinterest} />
                </div>
            </div>
            <hr />

        </div>
    )
}

export default Block_Social
