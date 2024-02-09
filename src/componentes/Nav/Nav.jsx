import { useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  // Controla o container do Menu

  const [menuContainer, setMenuContainer] = useState(null);

  return (
    <>
      <nav className={styles.nav_container}>
        <i
          className={menuContainer ? 'fa-solid fa-x' : 'fa-solid fa-bars'}

          onClick={() => menuContainer ? setMenuContainer(null) : setMenuContainer(1)}
        ></i>

        <div className={styles.brand}>
          <h2>
            NOSSO<span>SOL</span>
          </h2>
          <p>painéis solares</p>
        </div>
      </nav>

      {menuContainer && (
        <>
          <div
            className={styles.overlay_menu}
            onClick={() => setMenuContainer(null)}
          ></div>

          <div className={styles.menu}>
          
            <a href="#header">
              <h3> <i class="fa-solid fa-house"></i> INICIO</h3>
            </a>
            <a href="#contact">
              <h3> <i class="fa-solid fa-phone"></i> CONTATO</h3>
            </a>
            <a href="#simular">
              <h3> <i class="fa-solid fa-chart-simple"></i> SIMULAR</h3>
            </a>
            <a href="#info">
              <h3> <i class="fa-solid fa-chart-simple"></i>  INFORMAÇÕES</h3>
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
