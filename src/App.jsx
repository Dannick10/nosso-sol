import { useState } from 'react'
import './index.css'
import './estilos/header/header.css'

//imgs
import header_painel from './img/header_painel.svg'
import header_world from './img/header_world.svg'

//Componentes
import Nav from './componentes/Nav/Nav'
import Footer from './componentes/Nav/Footer'

function App() {

  return (
    <>
     <Nav/>

      <header>
        <div className="header_title">NÃO PAGUE MAIS UM ABSURDO NA SUA CONTA DE ENERGIA.</div>
        <div className="header_svg">
          <img src={header_painel} alt="imagem de um painel soalr" />
          <img src={header_world} alt="imagem de energia limpa" />
        </div>
      </header>
     










     <Footer/>
    </>
  )
}

export default App
