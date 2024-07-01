import styles from './Header.module.css'

import github from '../../assets/socials/github.svg'
import instagram from '../../assets/socials/instagram.svg'
import linkedin from '../../assets/socials/linkedin.svg'
import mail from '../../assets/socials/mail.svg'
import cv from '../../assets/elements/cv.svg'
import pp from '../../assets/WebPhyperlight.webp'


function Header(){

    return <div className={` ${styles.container}`} data-aos="fade-zoom-in" data-aos-duration="700">
        <div className={styles.landing}>
            <div className={styles.header}>
                <h1 className={styles.title} data-aos="fade-right" data-aos-duration="800">Fullstack Developer</h1>
                <span>Based in Mexico City.</span>
                <p className={styles.welcome}>Welcome to my portfolio that transcends time and space. Discover the artistry of code and innovation, crafted to create seamless digital experiences.</p>
                
                <div className={styles.socials}>
                    <a href='https://linkedin.com/in/alvarezmajuan' target='_blank'> <img src={linkedin} alt="LinkedIn Logo" /></a>

                    <a href='https://github.com/AlvarezMar' target='_blank'> <img src={github} alt="GitHub Logo" /></a>

                    <a href='https://www.instagram.com/juan_alvarezmar/' target='_blank'> <img src={instagram} alt="Instagram Logo" /></a>

                    <a href='mailto:alvarez.majuan@hotmail.com' target='_blank'> <img src={mail} alt="E-mail Logo" /></a>
                    <span></span>

                </div>
                    <a href='https://docs.google.com/document/d/1UHZOjRkxEIEBW9Y9de9hTC_9kTX0YRyYtyTjBs69r3k/edit?usp=sharing' target='_blank' className={styles.button}>
                        <p>Download CV</p>
                        <img src={cv} alt="" width='20px'/>
                    </a>
            </div>

            <div id='image-container' className={styles.profile}>
                <img src={pp} alt="Profile Image"/>
            </div>
        </div>
    </div>
}

export default Header;