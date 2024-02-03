import { useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  // Controla o container do Menu

  const [menuContainer, setMenuContainer] = useState(null);

  return (
    <>
      <nav className={styles.nav_container}>
        <i
          class="fa-solid fa-bars"
          onClick={() => setMenuContainer(1)}
        ></i>

        <div className={styles.brand}>
          <h2>
            NOSSO<span>SOL AAAAAAAAAAAA</span>
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
          
            <h3> <i class="fa-solid fa-house"></i> INICIO</h3>
            <h3> <i class="fa-solid fa-phone"></i> CONTATO</h3>
            <h3> <i class="fa-solid fa-chart-simple"></i> SIMULAR</h3>
            <h3> <i class="fa-solid fa-chart-simple"></i>  INFORMAÇÕES</h3>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
