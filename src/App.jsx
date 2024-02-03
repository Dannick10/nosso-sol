import { useState } from 'react'
import './index.css'
import './estilos/header/header.css'

//imgs
import header_painel from './img/header_painel.svg'
import header_world from './img/header_world.svg'
import Reactangle from './img/Rectangle.svg'

//Componentes
import Nav from './componentes/Nav/Nav'

function App() {

  return (
    <>
     <Nav/>

      <header>
        <div className='header_container'>  
          <div className="header_title">NÃO PAGUE MAIS UM ABSURDO NA SUA CONTA DE <span>ENERGIA</span>.</div>
          <div className="header_svg">
            <div  className='svg_world'><img src={header_world} alt="imagem de energia limpa" /></div>
            <div className='svg_painel'><img src={header_painel} alt="imagem de um painel soalr" /></div>
          </div>
        </div>
      </header>
     
    </>
  )
}

export default App
