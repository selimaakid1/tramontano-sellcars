import React, { Component } from 'react'
import About from './About'
import Contatti from './Contatti'
import { connect } from 'react-redux'
import { loadUser } from '../Actions/AuthActions'
import Showroom from './Showroom'
class Home extends Component {
    componentWillMount() {
        if (this.props.auth.token) { this.props.loadUser() }

    }
    render() {
        return (
            <div>
                <div className='home-header'>
                    <h4 className='home-text'>Tramontano, il modo migliore di viaggiare in totale comfort e sicurezza. Compra o noleggia a breve o a lungo termine la tua nuova auto da veri professionisti del settore.</h4>
                    <a href="mailto:info@tramontanoauto.it"><button className="btn draw-border">Contattaci</button></a>
                </div>
                <About />
                <Showroom />
                <Contatti />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { loadUser })(Home)
