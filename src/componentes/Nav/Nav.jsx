import { useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  // Controla o container do Menu

  const [menuContainer, setMenuContainer] = useState(null);

  // Responsividade do Menu

  return (
    <>
      <div className={styles.ResponsivNav}>
        <nav className={styles.nav_container}>
          <i
            className={
              menuContainer
                ? "burguer fa-solid fa-x"
                : " burguer fa-solid fa-bars"
            }
            onClick={() =>
              menuContainer ? setMenuContainer(null) : setMenuContainer(1)
            }
          ></i>

          <div className={styles.menuSocial}>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>

          <h1 className={styles.divisao}>|</h1>

          <ul className={styles.listMenu}>
            <a href="#header">
              <li>INICIO</li>
            </a>
            <a href="#contact">
              <li>CONTATO</li>
            </a>
            <a href="#simular">
              <li>SIMULAR</li>
            </a>
            <a href="#info">
              <li>INFORMAÇÕES</li>
            </a>
          </ul>

          <h1 className={styles.divisao}>|</h1>

          <a href="#header">
            <div className={styles.brand}>
              <h2>
                NOSSO<span>SOL</span>
              </h2>
              <p>painéis solares</p>
            </div>
          </a>
        </nav>
      </div>

      {menuContainer && (
        <>
          <div
            className={styles.overlay_menu}
            onClick={() => setMenuContainer(null)}
          ></div>

          <div className={styles.menu}>
            <a href="#header">
              <h3>
                {" "}
                <i class="fa-solid fa-house"></i> INICIO
              </h3>
            </a>
            <a href="#contact">
              <h3>
                {" "}
                <i class="fa-solid fa-phone"></i> CONTATO
              </h3>
            </a>
            <a href="#simular">
              <h3>
                {" "}
                <i class="fa-solid fa-chart-simple"></i> SIMULAR
              </h3>
            </a>
            <a href="#info">
              <h3>
                {" "}
                <i class="fa-solid fa-chart-simple"></i> INFORMAÇÕES
              </h3>
            </a>

            <div className={styles.social}>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
