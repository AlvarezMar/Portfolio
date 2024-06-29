import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'

function Navbar(){

    return <div className={`${styles.navbar} ${styles.container}`} id='navbar'>

        <div className={`${styles.header}`}>
            <img src={logo} alt="" />
            <h2>Juan Carlos Alvarez</h2>
        </div>

        <span></span>

        <div className={styles.links} id='links'>
            <a href='#home'>Home</a>
            <a href='#experience'>Experience</a>
            <a href='#proyects'>Projects</a>
            <a href='#about'>About</a>
            <a>Contact</a>
        </div>
    </div>
}

export default Navbar;