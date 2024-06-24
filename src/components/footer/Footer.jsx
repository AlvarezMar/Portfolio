import styles from './Footer.module.css'

import logo from '../../assets/logo.jpg'
import github from '../../assets/socials/github.svg'
import instagram from '../../assets/socials/instagram.svg'
import linkedin from '../../assets/socials/linkedin.svg'
import mail from '../../assets/socials/mail.svg'

function Footer(){


    return <div className={styles.footer}>
        <div className={styles.menu}>
            <div className={styles.data}>
                <img src={logo} alt="" />
                <a href="">Home</a>
                <a href="">Download Resume</a>
            

            </div>

            <div className={styles.socials}>
                <a href='https://linkedin.com/in/alvarezmajuan' target='_blank'> <img src={linkedin} alt="LinkedIn Logo" /></a>

                <a href='https://github.com/AlvarezMar' target='_blank'> <img src={github} alt="GitHub Logo" /></a>

                <a href='https://www.instagram.com/juan_alvarezmar/' target='_blank'> <img src={instagram} alt="Instagram Logo" /></a>

                <a href='mailto:alvarez.majuan@hotmail.com' target='_blank'> <img src={mail} alt="E-mail Logo" /></a>
            </div>
        </div>
        <div className={styles.watermark}>
        <p>© Juan Carlos Alvarez. 2024</p>
        </div>
    </div>

}

export default Footer