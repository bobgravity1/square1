import React from 'react'
import logo from '../images/logo.svg';
import search from '../images/search.svg';
import burger from '../images/burger.svg';
import play from '../images/play-button.svg'

const Navbar = ({active, setActive}) => {
    console.log(active)

    return (
        <>
        <nav className='navbar'>
            <div className="navbar-container">
                <img className='navbar-logo' src={logo} alt='square1 logo' />
                <ul className='navbar-items'> 
                    <li>NEWS</li>
                    <li>ENTERTAINMENT</li>
                    <li>SCHEDULE</li>
                    <li>PODCASTS</li>
                    <li>VIDEO</li>
                    <li>JOB FINDER</li>
                    <li>MORE</li>
                </ul>
        {/* mobile */}
                <img onClick={()=>setActive(!active)} className='navbar-search' src={search} alt='search icon' />        
                <div className='navbar-mobile-container'>
                    {/* SVG GIVING STRANGE OUTLINE <img className='navbar-mobile-burger' src={burger} alt='burger icon ' /> */}
                    <div className='navbar-mobile-burger'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <img className='navbar-mobile-logo' src={logo} alt='square1 logo' />  
                    <img onClick={()=>setActive(!active)} className='navbar-mobile-search' src={search} alt='mobile-search icon ' /> 
                </div>                                           
                </div>
        </nav>
        {/* mobile bottom panel */}
                <div className='mobile-panel'>
                    <div className='mobile-panel-left'>
                        <img className='mobile-panel-play' src={play} alt='square1 logo' />
                        <div className='mobile-panel-text'>
                        <p>LISTEN LIVE</p> 
                        <p>BEAT</p>
                    </div>
                    </div>  
                    <div className='mobile-panel-right'>
                        <img className='mobile-panel-play' src={play} alt='square1 logo' />
                        <div className='mobile-panel-text'>
                        <p>LISTEN LIVE</p> 
                        <p>NOUGHTY BEATS</p>
                    </div> 
                 </div>  
                </div>
        </>
    )
}

export default Navbar
