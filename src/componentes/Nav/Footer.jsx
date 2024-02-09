import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="info" className={styles.footer_container}>
      <div className={styles.brand}>
        <h2>
          NOSSO<span>SOL</span>
        </h2>
        <p>painéis solares</p>
      </div>

      <div className={styles.info}>
        <p>
          Nosso Sol: Pessoa jurídica de direito privado, sem fins lucrativos,
          que reúne provedores de soluções, EPCs, integradores, distribuidores,
          fabricantes e empresas de diferentes tamanhos e segmentos, além de
          profissionais e acadêmicos do setor, que atuam, direta ou
          indiretamente, na Geração Distribuída oriunda de fontes renováveis. 
        </p>
        <h4>NOSSO ESCRITÓRIO:</h4>
        <span>Av. xxxxxxxxxx xxxxxx N: 125</span>
        <h4>FALAR COM FINANCEIRO:</h4>
        <span>financeiro@nossosol.com</span>
      </div>

      <div className={styles.social}>
        <h3>SIGA-NOS NAS REDES SOCIAIS:</h3>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>

      <p>
        2024, NossoSol © Todos os direitos Reservados - Feito por <a href="https://github.com/fabcode01" target="_blank">Fabricio</a> e <a href="https://github.com/Dannick10" target="_blank">
            Dan
            Silva
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
