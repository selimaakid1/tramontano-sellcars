import React from 'react'

function AboutInfo() {
    return (
        <div>
            <div className='row about-info'>
                <div className='col-md-4 about-case'>
                    <i class="fas fa-euro-sign"><h2 className='info-title'>VENDITA AUTOVETTURE</h2></i>

                    <p className='info-text'>La ditta Tramontano garantisce alla sua clientela la vendita di autovetture plurimarche fra le migliori del mercato attuale. Inoltre dispone di un'ampia selezione di usato aziendale garantito a km certificati.</p>
                </div>
                <div className='col-md-4 about-case'>
                    <i class="fas fa-key"><h1 className='info-title'>NOLEGGIO AUTOVETTURE</h1></i>
                    <p className='info-text'>Il servizio di noleggio della ditta Tramontano è tra i migliori del mercato automobilistico. Le vetture concesse in noleggio sono tutte controllate accuratamente ed al massimo dell'efficienza</p>
                </div>
                <div className='col-md-4 about-case'>
                    <i class="fas fa-gas-pump"><h1 className='info-title'>DISTRIBUTORE CARBURANTE</h1></i>
                    <p className='info-text'>Per completare la propria offerta nel campo automobilistico, presso l'azienda Tramontano è presente anche un distributore di carburanti e GPL del marchio ESSO.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo
