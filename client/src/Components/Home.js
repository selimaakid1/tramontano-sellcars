import React from 'react'
import About from './About'
import Contatti from './Contatti'

function Home() {
    return (
        <div>
            <div className='home-header'>
                <h2 className='home-title'>Tramontano Auto</h2>
                <h4 className='home-text'>Tramontano, il modo migliore di viaggiare in totale comfort e sicurezza. Compra o noleggia a breve o a lungo termine la tua nuova auto da veri professionisti del settore.</h4>
                <a href="mailto:info@tramontanoauto.it"><button className="btn draw-border">Contattaci</button></a>
            </div>
            <About />
            <Contatti />
        </div>
    )
}

export default Home
