import React from 'react'
import '../styles/components/header.css';
import loop from '../../src/assets/icons/loop-vector.svg'

const Header = () => {
  const [buttonBurguer,setButtonBurguer] = React.useState(true);

  const onChangeButton = () =>{
    setButtonBurguer(!buttonBurguer)
  }
 
  return (
    <header className='header'>
        <form className='searcher'>
            <input type="text" className='searcher-input'/>
            <button className='searcher-button'>
            <span className='searcher-button-loop'>
                <img  src={loop}/>
            </span>
        </button>    
        </form>
        
        <section className='burguer-button' onClick={onChangeButton}>
            <article className= {buttonBurguer?'first-line':'first-line-change'}></article>
            <article className= {buttonBurguer?'second-line':'second-line-change'}></article>
            <article className={buttonBurguer?'third-line':'third-line-change'} ></article>
        </section>
    </header>
  )
}

export default Header
