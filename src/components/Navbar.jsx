import styles from './Navbar.module.css'

function Navbar(){

    return <div className={`${styles.navbar} ${styles.container}`}>
        <a>Home</a>
        <a>About</a>
        <a>Portfolio</a>
        <a>Experience</a>
        <a>Contact</a>
    </div>
}

export default Navbar