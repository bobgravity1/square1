import React from 'react'

//plugins
import Modal from 'react-modal'

// icons
import searchicon from '../images/modal-search.svg'

const Searchbar = ({active, setActive}) => {
    return (
        <Modal 
        className='open'
        isOpen={active}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>setActive(false)}
        style={{
            overlay: {
                backgroundColor:'rgba(0,0,0,0.9)',}
                }}>
            <div className="overlap">

                    <input placeholder='search...' />
                    <img src={searchicon} alt="search icon" />
                <button>Search</button>
            </div>
        </Modal>
    )
}

export default Searchbar
