import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { menu } from "./menuConfig";

export function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Logo" />

      <ul className={styles.list}>
        {menu.map((item) => (
          <li key={item.label} className={styles.item}>
            <Link
              to={item.path}
              className={
                location.pathname === item.path
                  ? styles.active
                  : undefined
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
