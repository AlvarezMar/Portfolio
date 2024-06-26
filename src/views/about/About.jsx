import styles from './About.module.css'
import about from '../../assets/sections/about.svg'
import TechStack from '../../components/techStack/techStack'

function About(){

    return <div className={`${styles.container}`} id='about'>
        <div className={styles.about}>
            <div className={styles.section} data-aos="fade-right">
                <img src={about} alt="About section" width='30px' />
                <h2>About</h2>
            </div>
            <div className={styles.content}>
                <h3 data-aos="fade-left" data-aos-offset="100">Hey! I&apos;m <span>Juan Carlos Alvarez Martínez</span>...</h3><br />
                <div data-aos="fade-left" data-aos-offset="200">
                    <p>A passionate software developer who loves turning complex problems into simple, elegant solutions. My journey in the tech world is driven by curiosity, creativity, and a constant desire to learn and grow.</p><br />
                    <p>I am a versatile software developer with a solid technical background and hands-on experience in programming and information technology. My experience in electromechanical maintenance has equipped me with meticulous attention to detail and exceptional problem-solving skills, which I now apply to software development projects.</p><br />
                    <p>My current tech stack is:</p>
                </div>
            </div>

        </div>
    <TechStack/>   
    </div>
}

export default About