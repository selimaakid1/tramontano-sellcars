import React from 'react'
import { motion } from "framer-motion"

function AboutInfo() {
    return (
        <motion.div>
            <motion.div className='row about-info'>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 3}}
                    className='col-md-4 about-case'>
                    <img src='https://images.unsplash.com/photo-1601359212330-672577f3977d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' width='220px' />
                    <i class="fas fa-euro-sign"><h2 className='info-title'>VENDITA AUTOVETTURE</h2></i>

                    <p className='info-text'>La ditta Tramontano garantisce alla sua clientela la vendita di autovetture plurimarche fra le migliori del mercato attuale. Inoltre dispone di un'ampia selezione di usato aziendale garantito a km certificati.</p>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3}}
                className='col-md-4 about-case'>
                    <img src='https://images.unsplash.com/photo-1601359212281-c5498af667af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' width='220px' />
                    <i class="fas fa-key"><h1 className='info-title'>NOLEGGIO AUTOVETTURE</h1></i>
                    <p className='info-text'>Il servizio di noleggio della ditta Tramontano è tra i migliori del mercato automobilistico. Le vetture concesse in noleggio sono tutte controllate accuratamente ed al massimo dell'efficienza</p>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3}}
                className='col-md-4 about-case'>
                    <img src='https://images.unsplash.com/photo-1601359212224-c70787ddf7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' width='220px' />
                    <i class="fas fa-gas-pump"><h1 className='info-title'>DISTRIBUTORE CARBURANTE</h1></i>
                    <p className='info-text'>Per completare la propria offerta nel campo automobilistico, presso l'azienda Tramontano è presente anche un distributore di carburanti e GPL del marchio ESSO.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutInfo
