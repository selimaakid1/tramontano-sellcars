import React from 'react'
import { WrappedMap } from './Map'

function Contatti() {
    return (
        <div>
            <div className='contatti'>
                <div className='trovaci'>
                    <h1 className='trovaci-title'>Contatti</h1>
                    <h1 className='trovaci-second-title'>Trovaci</h1>
                    <div className='row'>
                        <div className='col-md-6 map'>
                            <WrappedMap
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                        <div className='col-md-5'>
                            <h5 className='trovaci-name'>Tramontano Auto</h5>
                            <p className='trovaci-text'>Via Tortora 67</p>
                            <p className='trovaci-text'>Sarno (SA), 84087</p>
                            <p className='trovaci-text'>081 513-6513</p>
                            <div className='orari'>
                                <h1 className='nostri-orari'>I nostri orari</h1>
                                <p className='orari-text'>Lunedì - Venerdì: 9:30 - 13:00 e 16:00 - 20:30</p>
                                <p className='orari-text'>Sabato: 9:00 - 13:00</p>
                                <p className='orari-text'>Domenica: Chiuso</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contatti
