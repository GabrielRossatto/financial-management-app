import logo from "../../assets/logo.jpg"
import { useState } from "react";
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { menu } from './menuConfig'


export function Navbar() {

    const [openMenu, setOpenMenu] = useState(null);

    function toggleMenu(label) {
        setOpenMenu(prev => (prev === label ? null : label));
    }

    return (
    
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Logo" />

      <ul className={styles.list}>
        {menu.map(section => (
          <li key={section.label} className={styles.item}>
            <button
              type="button"
              onClick={() => toggleMenu(section.label)}
            >
              {section.label} ▾
            </button>

            {openMenu === section.label && (
              <ul className={styles.submenu}>
                {section.items.map(item => (
                  <li key={item.label}>
                    {item.path ? (
                      <Link to={item.path}>{item.label}</Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
    