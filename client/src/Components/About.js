import React from 'react'
import AboutInfo from './AboutInfo'
import Why from './Why'
function About() {
    return (
        <div className='about'>
            <div className='about-box'>
                <h2 className='about-title'>Chi siamo</h2>
                <h4 className='about-title-2'>Conosci meglio la nostra azienda</h4>
                <p className='about-text'>
                    L'azienda Tramontano s.r.l. opera nel campo della vendita e noleggio autoveicoli da ben 30 anni. In tutto questo periodo ha conquistato la fiducia della sua affezionata clientela grazie alla sua professionalità e competenza tecnica. Punto di forza della società è la conduzione familiare che favorisce il rapporto umano e cordiale con la clientela.
                    Tramontano s.r.l. è una concessionaria plurimarche in grado di soddisfare ogni desiderio dei suoi clienti. Esperta anche nel noleggio a breve e lungo termine di autoveicoli, possiede un parco auto con circa 1000 vetture disponibili in tempo reale. Vasta l'offerta di un usato aziendale garantito con km certificati. Di ottima qualità la selezione di veicoli a km 0.
                    La disponibilità è la caratteristica di quest'azienda che si è affermata nel tempo. Il cliente è ascoltato con attenzione e indirizzato verso la scelta che meglio risponde alle sue esigenze. L'esperienza di un tecnico del settore è fondamentale quando si vuole comprare un'auto nuova o noleggiare un veicolo a breve o a lungo termine.

                    Da Tramontano s.r.l. ogni dubbio viene sciolto e si acquista o noleggia autovetture di prima qualità.
                </p>
                <p className='about-text'>La ditta Tramontano garantisce alla sua clientela un'ampia gamma di servizi nel settore automobilistico. </p>
            </div>
            <AboutInfo />
            <h2 className='about-title'>Perché scegliere noi?</h2>
            <Why />
        </div>
    )
}

export default About
