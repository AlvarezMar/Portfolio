import styles from './About.module.css'
import about from '../../assets/sections/about.svg'
import cv from '../../assets/elements/cv.svg'
import TechStack from '../../components/techStack/techStack'

function About(){

    return <div className={`${styles.container}`}>
        <div className={styles.about}>
            <div className={styles.section}>
                <img src={about} alt="" width='30px' />
                <h2>About</h2>
            </div>
            <div className={styles.content}>
                <h3>Hey! I&apos;m <span>Juan Carlos Alvarez Martínez</span>...</h3><br />
                <p>A passionate software developer who loves turning complex problems into simple, elegant solutions. My journey in the tech world is driven by curiosity, creativity, and a constant desire to learn and grow.</p><br />
                <p>I am a versatile software developer with a solid technical background and hands-on experience in programming and information technology. My experience in electromechanical maintenance has equipped me with meticulous attention to detail and exceptional problem-solving skills, which I now apply to software development projects.</p><br />
                <p>My current tech stack is:</p>
            </div>

        </div>
    <TechStack/>   
                {/* <a className={styles.button}>
                    <p>Download CV</p>
                    <img src={cv} alt="" width='20px'/>
                </a> */}
    </div>
}

export default About