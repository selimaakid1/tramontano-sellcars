import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../Actions/AuthActions'

class Rent extends Component {
    componentWillMount() {
        this.props.loadUser()

    }
    render() {
        return (
            <div>
                <div>
                    <h1>Noleggio Auto</h1>
                    <p>Il servizio di noleggio della ditta Tramontano è tra i migliori del mercato automobilistico. La serietà che contraddistingue quest'azienda ha fatto crescere la fiducia dei consumatori nei suoi confronti. Le vetture concesse in noleggio sono tutte controllate accuratamente ed al massimo dell'efficienza. Il personale della ditta, sempre cortese e disponibile, ascolta le esigenze di ogni cliente e riesce ad offrire a noleggio l'autovettura più indicata. È possibile noleggiare autovetture a breve o a lungo termine. Il noleggio a breve termine in genere è richiesto per esigenze turistiche ed è un servizio molto importante. Invece il servizio di noleggio a lungo termine rappresenta una valida alternativa all'acquisto di un'autovettura. Questo tipo di servizio è molto utilizzato dalle aziende. La gamma di autovetture concesse a noleggio dalla ditta Tramontano è molto ampia per favorire una scelta perfetta. La conduzione familiare dell'azienda favorisce un rapporto amichevole con i propri clienti che aiuta ad incrementare il clima di fiducia. Per questo motivo i clienti della ditta Tramontano sono sempre molto soddisfatti.</p>
                </div>
            </div>
        )
    }
}
export default connect({ loadUser })(Rent)
