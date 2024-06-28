import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'

function Navbar(){

    return <div className={`${styles.navbar} ${styles.container}`}>

        <div className={`${styles.header}`}>
            <img src={logo} alt="" />
            <h2>Juan Carlos Alvarez</h2>
        </div>

        <span></span>

        <div className={styles.links}>
            <a>Home</a>
            <a>Experience</a>
            <a>Projects</a>
            <a>About</a>
            <a>Contact</a>
        </div>
    </div>
}

export default Navbar;