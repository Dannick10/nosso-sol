import { useState } from "react";
import "./index.css";
import "./estilos/header/header.css";

//imgs
import header_painel from "./img/header_painel.svg";
import header_world from "./img/header_world.svg";
import Reactangle from "./img/Rectangle.svg";
import sun from "./img/sun.svg"

//Componentes
import Nav from "./componentes/Nav/Nav";
import Footer from "./componentes/Nav/Footer";

function App() {
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
      </header>

      <main>
        <section id="showcase_container">
          <div className="subtitle">
            <p>
              Nos últimos anos os brasileiros têm investido mais em energia
              limpa. Além de ser mais barato para o bolso, quem investe em
              energia solar acaba investindo na sua independência energética.
            </p>
          </div>

          <span className="line"></span>

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

        <section className="c-depoimentos">
         
          <div className="d1">
            <div className="photo-name">
              <span
                className="img"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVzc29hfGVufDB8fDB8fHwy)",
                }}
              ></span>
              <div className="name-carrossel">
                <h3>Júlia Ramos</h3>
                <p>cliente real</p>
              </div>
                

            </div>

            <hr className="line-card"/>

            <p className="carrosel-descricao">Para quem está considerando adotar a energia solar, eu não poderia recomendar o suficiente. É uma decisão que não apenas beneficia o meio ambiente, mas também o seu bolso a longo prazo. Estou muito feliz por ter feito essa escolha e mal posso esperar para ver os benefícios contínuos nos próximos anos.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
