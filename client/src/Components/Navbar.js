import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../Actions/AuthActions'

const Navbar = props => {

    const logMeOut = () => {
        props.logout()
    }
 
    const adminConnected = () => (
        <div className='navbar'>
            <div className='logo'>
                {/* <img src='/logoauto.png' width='80px'/> */}
            </div>
            <div className='row d-flex'>
                <div className='col' id='links'>
                    <Link to='/'><h6 className='nav-link'>Home</h6></Link>
                </div>
                <div className='col' id='links'>
                    <Link to='/nolleggio'><h6 className='nav-link'>Noleggio</h6></Link>
                </div>
                <div className='col' id='links' >
                    <Link to='/vendita'><h6 className='nav-link'>Vendita</h6></Link>
                </div>
                <div className='col' id='links'>
                    <h6 className='nav-link' onClick={logMeOut}>Disconettiti</h6>
                </div>
            </div>

        </div>)

    const guest = () => (
        <div className='navbar'>
            <div className='logo'>
                {/* <img src='/logoauto.png' width='80px'/> */}

            </div>
            <div className='row d-flex'>
                <div className='col' id='links'>
                    <Link to='/'><h6 className='nav-link'>Home</h6></Link>
                </div>
                <div className='col' id='links'>
                    <Link to='/nolleggio'><h6 className='nav-link'>Noleggio</h6></Link>
                </div>
                <div className='col' id='links' >
                    <Link to='/vendita'><h6 className='nav-link'>Vendita</h6></Link>
                </div>
                <div className='col' id='links'>
                    <h6 className='nav-link'>Azienda</h6>
                </div>
                <div className='col' id='links'>
                    <Link to='/contatti' ><h6 className='nav-link'>Contatti</h6></Link>
                </div>

            </div>

        </div>
    )

    return (
        <div className='navbar'>
            <div className='logo'>
                {/* <img src='/logoauto.png' width='80px'/> */}
            </div>
            {
                props.auth.isAuthenticated ? adminConnected() : guest()
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logout })(Navbar)
