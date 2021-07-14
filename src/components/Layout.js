import React, {useState} from 'react'

// components
import Navbar from './Navbar'
import Footer from './Footer'
import Searchbar from './Searchbar'


// layout-container for components
//styles found in layout.scss

const Layout = ({children}) => {
    const [active, setActive]=useState(false)

    return (
        <>
        <div className={`${active&&'layout-active'} layout`}>         
        <div className='layout-container'> 
            <Navbar active={active} setActive={setActive} />
                <main>              
                    {children}    
                </main>                  
            <Footer />
            <Searchbar active={active} setActive={setActive} />
        </div>             
        </div>
      </>
    )
}

export default Layout
