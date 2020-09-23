import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = props => {

    const adminConnected = () => (
        <div className='navbar'>
            <div className='logo'>
                <h1 className='logo-name'>Tramontano Auto</h1>
            </div>
            <div className='col'>
                Ciao, {props.auth.admin.Firstname + ' ' + this.props.auth.admin.Lastname}
            </div>
            <div className='row d-flex'>
                <div className='col' id='links'>
                    <Link to='/'><h6 className='nav-link'>Home</h6></Link>
                </div>
                <div className='col' id='links'>
                    <Link><h6 className='nav-link'>Noleggio</h6></Link>
                </div>
                <div className='col' id='links' >
                    <Link to='/vendita'><h6 className='nav-link'>Vendita</h6></Link>
                </div>
                <div className='col' id='links'>
                    <h6 className='nav-link'>Disconettiti</h6>
                </div>
            </div>

        </div>)

    const guest = () => (
        <div className='navbar'>
            <div className='logo'>
                <h1 className='logo-name'>Tramontano Auto</h1>
            </div>
            <div className='row d-flex'>
                <div className='col' id='links'>
                    <Link to='/'><h6 className='nav-link'>Home</h6></Link>
                </div>
                <div className='col' id='links'>
                    <Link><h6 className='nav-link'>Noleggio</h6></Link>
                </div>
                <div className='col' id='links' >
                    <Link to='/vendita'><h6 className='nav-link'>Vendita</h6></Link>
                </div>
                <div className='col' id='links'>
                    <h6 className='nav-link'>Azienda</h6>
                </div>
                <div className='col' id='links'>
                    <h6 className='nav-link'>Contatti</h6>
                </div>

            </div>

        </div>
    )
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1 className='logo-name'>Tramontano Auto</h1>
            </div>
            {
                props.auth.isAuthenticated ? adminConnected : guest
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Navbar)
