import React from 'react';
import '../styles/components/bank-steps.css';
import pubPink from '../assets/icons/access-pub-pink.svg';
import releaseGreenIcon from '../assets/icons/release-green-publication.svg';
import acceptOfferRedIcon from '../assets/icons/accept-offer-red.svg';
import thirdYellowPublicationIcon from '../assets/icons/third-yellow-publication.svg';


const BankStepItem = ({bankTittle,bankIcon,bankStepsDescription}) =>{
    return(
        <article className='bank-steps-item'>
            <h3 className='bank-steps-tittle'>{bankTittle}</h3>
            <img src={bankIcon} className='bank-steps-icon'/>
            <p className='bank-steps-description'>{bankStepsDescription}</p>    
        </article>
    )
}

const BankSteps = () => {
  return (
    <section className='bank-steps'>
        <h1 className='bank-steps-main-tittle'>¿Cómo funciona?</h1>
        <p className='bank-steps-main-description'>Regístrate, y haz una publicación de una ayuda que ofrezcas,
        por cada hora ofrecida obtendrás horas de intercambio en tu saldo del banco,
         las cuales puedes intercambiar por horas de una ayuda que necesites. </p>

         <h1 className='bank-steps-first-tittle'>¿Requieres que alguien te ayude?</h1>
        <BankStepItem
            bankTittle='Crea una publicación'
            bankIcon={releaseGreenIcon}
            bankStepsDescription='Respondes a una publicación de un servicio que otro usuario registrado necesite a la cual consideras que puedes servir'
        />
        <BankStepItem
            bankTittle='Acepta una oferta'
            bankIcon={acceptOfferRedIcon}
            bankStepsDescription='Contactas con otro usuario que pueda resolver tu solicitud, acuerda con el o ella los detalles del servicio ofrecido y la cantidad de horas '
        />
        <BankStepItem
            bankTittle='Recibes la ayuda, consumes tiempo'
            bankIcon={thirdYellowPublicationIcon}
            bankStepsDescription='El otro usuario resuelve tu solicitud, consumes unas horas de tu banco y calificas el servicio'
        />    
        <h1 className='bank-steps-first-tittle'>¿Quieres ayudar a alguien?</h1>
        <BankStepItem
            bankTittle='Accede a una Publicación'
            bankIcon={pubPink}
            bankStepsDescription='Respondes a una publicación de un servicio que otro usuario registrado necesite'
        />
        <BankStepItem
            bankTittle='Acepta la oferta'
            bankIcon={pubPink}
            bankStepsDescription='Contactas con el usuario registrado para resolver su solicitud, acuerda con el o ella la cantidad de horas ofrecidas y ofreces el servicio'
        />
        <BankStepItem
            bankTittle='Ofreces ayuda, ganas horas de tiempo'
            bankIcon={pubPink}
            bankStepsDescription='Resuelves la solicitud del usuario., recibes unas horas en tu bando del tiempo y recibes una calificación'
        />    
        <article className='bank-step-suscribe'>
            <p>Quirero Suscribirme</p>
        </article>
    </section>
  )
}

export default BankSteps
