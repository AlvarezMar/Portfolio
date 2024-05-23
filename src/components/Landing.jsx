import styles from './Landing.module.css'

import github from '../assets/socials/github.svg'
import instagram from '../assets/socials/instagram.svg'
import linkedin from '../assets/socials/linkedin.svg'
import outlook from '../assets/socials/outlook.svg'

function Landing(){

    return <div className={`${styles.landing} ${styles.container}`}>
        <div>
            <h1 className={styles.header}>Fullstack Developer</h1>
            <p className={styles.welcome}>Welcome to my portfolio which trascends time and space. Discover the artistry of moments captured in motion.</p>
        </div>

        <div>
            <span>Aqui va la imagen</span>
        </div>

        <div className={styles.socials}>
            <a> <img src={linkedin} alt="" /></a>
            <a> <img src={github} alt="" /></a>
            <a> <img src={instagram} alt="" /></a>
            <a> <img src={outlook} alt="" /></a>
            <span></span>
        </div>

    </div>
}

export default Landing;