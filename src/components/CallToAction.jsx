import React from 'react';
import clock  from '../assets/icons/big-icon-timer.svg';
import '../styles/components/call-to-action.css';


const CallToAction = () => {
  return (
    <div className='call-to-action-container'>
    <section className='call-to-action'>
        <h1 className='call-to-action-tittle'>Banco del tiempo</h1>
        <img src={clock} className='call-to-action-clock'/>
        <h2 className='call-to-action-tagline'>Fortaleciendo comunidades intercambiando tiempo</h2>
        <p className='call-to-action-description'>El banco del tiempo es una iniciativa en la que intercambias tiempo; ofrece horas de ayuda 
        de algo que quieres compartir, cámbialas por las mismas horas de un servicio que necesitas </p>
        <article className='call-to-action-connection'>
            <p>Deseo más información</p>
        </article>
    </section>
    </div>
  )
}

export default CallToAction
