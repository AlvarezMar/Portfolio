import styles from './About.module.css'

function About(){

    return <div className={`${styles.container}`}>
        <div className={styles.about}>
            <div>
                <h2>About</h2>
            </div>
            <div className={styles.content}>
                <p>Hello! I am <span>Juan Carlos Alvarez Martinez</span>, a passionate software developer who loves turning complex problems into simple, elegant solutions. My journey in the tech world is driven by curiosity, creativity, and a constant desire to learn and grow.</p>
                <p>I am a versatile software developer with a solid technical background and hands-on experience in programming and information technology. My experience in electromechanical maintenance has equipped me with meticulous attention to detail and exceptional problem-solving skills, which I now apply to software development projects.</p>
                
            </div>

        </div>
            <div className={styles.tech}>
                <h3>Tech Stack |</h3>
                <img src="src/assets/tech/js.svg" alt="JavaScript" loading='lazy'/>
                <img src="src/assets/tech/ts.svg" alt="TypeScript" loading='lazy'/>
                <img src="src/assets/tech/html.svg" alt="HTML" loading='lazy'/>
                <img src="src/assets/tech/css.svg" alt="CSS" loading='lazy'/>
                <img src="src/assets/tech/docker.svg" alt="Docker" loading='lazy'/>
                <img src="src/assets/tech/git.svg" alt="Git" loading='lazy'/>
                <img src="src/assets/tech/github.svg" alt="GitHub" loading='lazy'/>
                <img src="src/assets/tech/insomnia.svg" alt="Insomnia" loading='lazy'/>
                <img src="src/assets/tech/mongo.svg" alt="MongoDB" loading='lazy'/>
                <img src="src/assets/tech/nestjs.svg" alt="NestJS" loading='lazy'/>
                <img src="src/assets/tech/nodejs.svg" alt="Node.js" loading='lazy'/>
                <img src="src/assets/tech/npm.svg" alt="NPM" loading='lazy'/>
                <img src="src/assets/tech/postgres.svg" alt="PostgreSQL" loading='lazy'/>
                <img src="src/assets/tech/react.svg" alt="React" loading='lazy'/>
                <img src="src/assets/tech/vsc.svg" alt="Visual Studio Code" loading='lazy'/>

            </div>
    </div>
}

export default About