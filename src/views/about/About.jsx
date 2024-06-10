import styles from './About.module.css'

function About(){

    return <div className={`${styles.about} `}>
        <div className={styles.container}>
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
                <img src="src/assets/tech/js.svg" alt="" />
                <img src="src/assets/tech/ts.svg" alt="" />
                <img src="src/assets/tech/html.svg" alt=""/>
                <img src="src/assets/tech/css.svg" alt=""/>
                <img src="src/assets/tech/docker.svg" alt="" />
                <img src="src/assets/tech/git.svg" alt="" />
                <img src="src/assets/tech/github.svg" alt="" />
                <img src="src/assets/tech/insomnia.svg" alt="" />
                <img src="src/assets/tech/mongo.svg" alt="" />
                <img src="src/assets/tech/nestjs.svg" alt="" />
                <img src="src/assets/tech/nodejs.svg" alt="" />
                <img src="src/assets/tech/npm.svg" alt="" />
                <img src="src/assets/tech/postgres.svg" alt="" />
                <img src="src/assets/tech/react.svg" alt="" />
                <img src="src/assets/tech/vsc.svg" alt="" />

            </div>
    </div>
}

export default About