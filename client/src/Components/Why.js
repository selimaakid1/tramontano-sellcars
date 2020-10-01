import React from 'react'
import { motion } from "framer-motion"

function Why() {
    return (
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3}}
        className='row why-case'>
            <motion.div className='col-md-4 why-box'>
                <img src='https://images.unsplash.com/photo-1581285228989-7fac0de8caab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' width='220px' />
                <i class="fas fa-award"><h2 className='why-title'>Esperienza</h2></i>
                <p className='why-text'>La Tramontano Srl, con la sua esperienza trentennale, saprà sempre trovare la migliore soluzione per qualsiasi necessità. Dispone di un'ampia selezione di usato aziendale garantito a km certificati. Il cliente è certo di fare un acquisto tutelato.</p>
            </motion.div>
            <motion.div className='col-md-4 why-box'>
                <img src='https://images.unsplash.com/photo-1581285228930-48ed80f57e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' width='220px' />
                <i class="fas fa-thumbs-up"><h2 className='why-title'>Qualità</h2></i>
                <p className='why-text'>Nella sua esperienza trentennale Tramontano Auto  ha acquisito le giuste competenze per garantire alla propria clientela un usato di qualità con vetture sicure ed in ottime condizioni, anche per quanto riguarda l'aspetto tecnico.</p>
            </motion.div>
            <motion.div className='col-md-4 why-box'>
                <img src='https://images.unsplash.com/photo-1581285228660-48add4794ee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' width='220px' />
                <i class="fas fa-user-tie"><h2 className='why-title'>Professionalità</h2></i>
                <p className='why-text'>Il personale della ditta, sempre cortese e disponibile, ascolta le esigenze di ogni cliente e riesce ad offrire l'autovettura più indicata. La serietà che contraddistingue quest'azienda ha fatto crescere la fiducia dei consumatori nei suoi confronti.</p>
            </motion.div>
        </motion.div>
    )
}

export default Why
