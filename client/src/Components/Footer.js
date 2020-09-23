import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='follow'>
                <a href='https://www.facebook.com/Tramontano-auto-SRL-477967739237172' target='_Blank'><i class="fab fa-facebook"></i></a>
            </div>
            <div className='links'>
                <Link to='/chisiamo'>Chi siamo</Link> | <Link to='/contatti'>Contatti</Link>
            </div>
            <div className='copyright'>
                <p>&copy; 2020 Tramontano SRL</p>
            </div>
        </div>
    )
}

export default Footer
