import { useState } from "react";
import "./index.css";
import "./estilos/header/header.css";

//imgs
import header_painel from "./img/header_painel.svg";
import header_world from "./img/header_world.svg";
import Luciana from "./img/Luciana.webp";
import Felipe from "./img/Felipe.webp";
import Sant from './img/cliente-depoimento.jpg'

//Componentes
import Nav from "./componentes/Nav/Nav";
import Footer from "./componentes/Nav/Footer";
import Card from "./componentes/card";
import {Swiper, SwiperSlide} from 'swiper/react'

function App() {
  // header arrow para scrollar pro primeiro topico
  function scrollHeader() {
    window.scroll(0, 300);
  }

  // [INCIO]  botao pra voltar pra cima
  const [backToTop, setBackToTop] = useState(null);

  window.addEventListener("scroll", () => {

    if (window.scrollY >= 650) {
      setBackToTop(1);
    } else if(window.scrollY <= 189)(
      setBackToTop(null)
    )
  });

  const handleBackToTop=()=>{
    window.scroll(0 ,0)
  }
 
  // [FIM] botao pra voltar pra cima


  return (
    <>
      <Nav />

      <header id="header">
        <div className="header_container">
          <div className="header_title">
            NÃO PAGUE MAIS UM ABSURDO NA SUA CONTA DE <span>ENERGIA</span>.
          </div>
          <div className="header_svg">
            <div className="svg_world">
              <img
                src={header_world}
                alt="imagem de energia limpa"
              />
            </div>
            <div className="svg_painel">
              <img
                src={header_painel}
                alt="imagem de um painel soalr"
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => scrollHeader()}
          className="arrow-down"
        >
          <i class="fa-solid fa-arrow-down"></i>
        </div>
      </header>

      <main>
        <section id="showcase_container">
          <h3>Enérgia Solar</h3>
          <div className="subtitle">
            <p>
              Nos últimos anos os brasileiros têm investido mais em energia
              limpa. Além de ser mais barato para o bolso, quem investe em
              energia solar acaba investindo na sua independência energética.
            </p>
          </div>

          <span className="line"></span>
          <path d="M52,253 C246,364 452,106 582,292" />

          <div className="img_cards">
            <div className="card-1"></div>

            <div className="card-2"></div>
          </div>
        </section>

        <section className="info_enegy">
          <h2 className="title-1">
            VOCÊ GERA A SUA PRÓPRIA ENERGIA, PAGA MENOS TARIFAS E SOBRA MAIS
            DINHEIRO NO SEU BOLSO<span>.</span>
          </h2>

          <p className="description-1">
            Temos alguns depoimentos muito legais que mostram que esse é o
            futuro para quem gosta de ter grana no bolso e de quebra ainda ajuda
            o meio ambiente.
          </p>
        </section>

        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
        >
          <SwiperSlide>
          <Card 
        img='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVzc29hfGVufDB8fDB8fHwy' 
        nome='Júlia Ramos'
        info='Para quem está considerando adotar a energia solar, eu não poderia
              recomendar o suficiente. É uma decisão que não apenas beneficia o
              meio ambiente, mas também o seu bolso a longo prazo. Estou muito
              feliz por ter feito essa escolha e mal posso esperar para ver os
              benefícios contínuos nos próximos anos.'/>
          </SwiperSlide>

          <SwiperSlide>
            
          <Card 
        img={Felipe} 
        nome='Felipe Oliveira' 
        info='Estou extremamente satisfeito por ter feito essa decisão e estou
        ansioso para colher os frutos nos próximos anos. A mudança para a
        energia solar não só alinhou minha casa com práticas mais
        sustentáveis, mas também resultou em economias significativas em
        minhas despesas com energia.'
        />
        
          </SwiperSlide>

          <SwiperSlide>
          <Card 
        img={Luciana} 
        nome='Luciana Santos'
        info='Estou incrivelmente feliz por ter tomado esse caminho e estou ansiosa para experimentar os benefícios contínuos nos próximos anos. A transição para a energia solar foi uma escolha inteligente e recompensadora em todos os aspectos.'
        />
          </SwiperSlide>

          <SwiperSlide>
          <Card 
        img={Sant} 
        nome='Santiago S.'
        info='Desde que instalei os painéis solares em minha casa, minha vida mudou para melhor em tantos aspectos. Além de estar fazendo minha parte para o meio ambiente, estou economizando uma quantia significativa de dinheiro a cada mês.'
        />
          </SwiperSlide>
          
        </Swiper>

        <span className="line"></span>
          
       

        <section className="simular-container">
              <h1>FUJA DAS GRANDES TAXAS E POSSIVÉIS QUEDAS DE ENERGIA.</h1>
              <p>Se você têm o seu próprio negócio ou deseja adquirir painéis para sua casa, simule agora um orçamento:</p>
              <button className="btn-simular">SIMULAR <i class="fa-solid fa-arrow-right"></i></button>


        </section>

      

        {backToTop && (
          <div
            className="arrow-up"
            onClick={handleBackToTop}
          >
            <i class="fa-solid fa-arrow-up"></i>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
