import styles from './Header.module.css'

import github from '../../assets/socials/github.svg'
import instagram from '../../assets/socials/instagram.svg'
import linkedin from '../../assets/socials/linkedin.svg'
import mail from '../../assets/socials/mail.svg'

import pp from '../../assets/Web-PP.webp'

function Header(){

    return <div className={`${styles.landing} ${styles.container}`}>
        <div className={styles.header}>
            <h1 className={styles.title}>Fullstack Developer</h1>
            <span>Based in Mexico City.</span>
            <p className={styles.welcome}>Welcome to my portfolio that transcends time and space. Discover the artistry of code and innovation, crafted to create seamless digital experiences.</p>
            
            <div className={styles.socials}>
                <a href='https://linkedin.com/in/alvarezmajuan' target='_blank'> <img src={linkedin} alt="LinkedIn Logo" /></a>

                <a href='https://github.com/AlvarezMar' target='_blank'> <img src={github} alt="GitHub Logo" /></a>

                <a href='https://www.instagram.com/juan_alvarezmar/' target='_blank'> <img src={instagram} alt="Instagram Logo" /></a>

                <a href='mailto:alvarez.majuan@hotmail.com' target='_blank'> <img src={mail} alt="E-mail Logo" /></a>
                <span></span>
            </div>
        </div>

        <div>
            <img src={pp} width='500px' alt="" />
        </div>
    </div>
}

export default Header;