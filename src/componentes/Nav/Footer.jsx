import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.brand}>
        <h2>
          NOSSO<span>SOL</span>
        </h2>
        <p>painéis solares</p>
      </div>

        <div className={styles.info}>
            <p>Nosso Sol: Pessoa jurídica de direito privado, sem fins lucrativos, que reúne provedores de soluções, EPCs, integradores, distribuidores, fabricantes e empresas de diferentes tamanhos e segmentos, além de profissionais e acadêmicos do setor, que atuam, direta ou indiretamente, na Geração Distribuída oriunda de fontes renováveis. </p>
            <h4>NOSSO ESCRITÓRIO:</h4>
        </div>


    </footer>
  );
};

export default Footer;
