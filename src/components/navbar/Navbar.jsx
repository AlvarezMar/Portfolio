import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/elements/menu.svg'
import { useEffect, useRef, useState } from 'react';

function Navbar(){
 const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev); // Toggle isOpen state
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleScroll() {
        closeMenu(); // Cierra el menú si se hace scroll y está abierto
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // Cierra el menú si se hace clic fuera de él
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleLinkClick() {
      closeMenu(); // Cierra el menú al hacer clic en un enlace del menú
    }

    document.querySelectorAll(`.${styles.mobile_links} a`).forEach(anchor => {
      anchor.addEventListener('click', handleLinkClick);
    });

    return () => {
      document.querySelectorAll(`.${styles.mobile_links} a`).forEach(anchor => {
        anchor.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

    return <div className={`${styles.navbar} ${styles.container}`} id='navbar'>

        <div className={styles.background}>
            <div className={`${styles.header}`}>
                <a href="#home"><img src={logo} alt="" href/></a>
                <h2>Juan Carlos Alvarez</h2>

                <button className={styles.menu} onClick={toggleMenu}>
                    <img src={menu} alt="" width='30px'/>
                </button>
            </div>

            <div className={`${styles.mobile_links} ${isOpen ? styles.show : ''}`} id='links' ref={menuRef}>
                <a href='#home'>Home</a>
                <a href='#experience'>Experience</a>
                <a href='#proyects'>Projects</a>
                <a href='#about'>About</a>
                <a href='#'>Contact</a>
            </div>

            <span></span>

        </div>




        <div className={styles.links} id='links'>
            <a href='#home'>Home</a>
            <a href='#experience'>Experience</a>
            <a href='#proyects'>Projects</a>
            <a href='#about'>About</a>
            <a href='#'>Contact</a>
        </div>
    </div>
}

export default Navbar;