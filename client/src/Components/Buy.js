import React, { Component } from 'react'
import CarList from './CarList'
import { connect } from 'react-redux'
import { loadUser } from '../Actions/AuthActions'

class Buy extends Component {
    componentWillMount() {
        this.props.loadUser()

    }
    render() {
        return (
            <div>
                <div className='buy-info'>
                    <h1 className='buy-title'>Vendita Auto</h1>
                    <p className='buy-text'>La ditta Tramontano garantisce alla sua clientela un'ampia gamma di servizi nel settore automobilistico. Il primo di questi è la vendita di autovetture plurimarche fra le migliori del mercato attuale. Nella scelta si viene affiancati dal personale dell'azienda esperto nel consigliare il veicolo idoneo ad ogni acquirente. Acquistare un'auto nuova è un passo importante ed è necessario conoscere le specifiche tecniche del veicolo cui si è interessati. Se invece di acquistare una vettura si preferisce prenderla a noleggio l'azienda Tramontano possiede un vasto parco macchine per noleggi a breve o lunga durata. Quando si noleggia un'autovettura ci si deve rivolgere ad una ditta seria che offre veicoli in perfette condizioni tecniche. La Tramontano Srl, con la sua esperienza trentennale, saprà sempre trovare la migliore soluzione per qualsiasi necessità. Inoltre dispone di un'ampia selezione di usato aziendale garantito a km certificati. In questo modo il cliente è certo di fare un acquisto tutelato. Presso l'azienda Tramontano è presente un distributore di carburanti e GPL del marchio ESSO, per completare la propria offerta nel campo automobilistico.</p>
                </div>
                <CarList />
            </div>
        )
    }
}
export default connect({ loadUser })(Buy)
