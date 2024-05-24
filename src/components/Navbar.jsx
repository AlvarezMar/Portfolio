import styles from './Navbar.module.css'
import logo from '../assets/logo.jpg'

function Navbar(){

    return <div className={`${styles.navbar} ${styles.container}`}>

        <div className={`${styles.header}`}>
        <img src={logo} alt="" />
        <h2>Juan Carlos Alvarez</h2>
        </div>



        <div className={styles.links}>
            <a>Home</a>
            <a>About</a>
            <a>Portfolio</a>
            <a>Experience</a>
            <a>Contact</a>
        </div>
    </div>
}

export default Navbar