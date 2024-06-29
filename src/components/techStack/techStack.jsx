import styles from './techStack.module.css'

function TechStack(){

    return <div className={styles.container}>
        <div className={styles.tech}>

            <div className={styles.frontend}>
                <h3>Frontend</h3>
                <div className={styles.section}>
                    <img src="src/assets/tech/js.svg" alt="JavaScript" loading='lazy'/>
                    <img src="src/assets/tech/ts.svg" alt="TypeScript" loading='lazy'/>
                    <img src="src/assets/tech/html.svg" alt="HTML" loading='lazy'/>
                    <img src="src/assets/tech/css.svg" alt="CSS" loading='lazy'/>
                    <img src="src/assets/tech/react.svg" alt="React" loading='lazy'/>
                    <img src="src/assets/tech/tailwind.svg" alt="Tailwind" loading='lazy' />
                    <img src="src/assets/tech/redux.svg" alt="Redux" loading='lazy' />
                </div>
            </div>

            <div className={styles.backend}>
                <h3>Backend</h3>
                <div className={styles.section}>
                    <img src="src/assets/tech/nodejs.svg" alt="Node.js" loading='lazy'/>
                    <img src="src/assets/tech/nestjs.svg" alt="NestJS" loading='lazy'/>
                    <img src="src/assets/tech/express.svg" alt="Express" loading='lazy'/>
                    <img src="src/assets/tech/mongo.svg" alt="MongoDB" loading='lazy'/>
                    <img src="src/assets/tech/postgres.svg" alt="PostgreSQL" loading='lazy'/>
                </div>
                
            </div>

            <div className={styles.devOps}>
                <h3>DevOps</h3>
                <div className={styles.section}>
                    <img src="src/assets/tech/docker.svg" alt="Docker" loading='lazy'/>
                    <img src="src/assets/tech/jest.svg" alt="Jest" loading='lazy'/>
                </div>
            </div>

            <div className={styles.tools}>
                <h3>Tools</h3>
                <div className={styles.section}>
                    <img src="src/assets/tech/vsc.svg" alt="Visual Studio Code" loading='lazy'/>
                    <img src="src/assets/tech/git.svg" alt="Git" loading='lazy'/>
                    <img src="src/assets/tech/github.svg" alt="GitHub" loading='lazy'/>
                    <img src="src/assets/tech/insomnia.svg" alt="Insomnia" loading='lazy'/>
                    <img src="src/assets/tech/npm.svg" alt="NPM" loading='lazy'/>
                </div>
            </div>

            <div className={styles.learning}>
                <h3>Learning</h3>
                <div className={styles.section}>
                    <img src="src/assets/tech/java.svg" alt="Java" loading='lazy'/>
                    <img src="src/assets/tech/spring.svg" alt="Spring" loading='lazy'/>
                    <img src="src/assets/tech/nextjs.svg" alt="Next.js" loading='lazy'/>
                    <img src="src/assets/tech/figma.svg" alt="Figma" loading='lazy'/>

                </div>

            </div>
        </div>
    </div>
}

export default TechStack;