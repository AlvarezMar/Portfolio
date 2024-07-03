import styles from './techStack.module.css'
import js from '../../assets/tech/js.svg'
import ts from '../../assets/tech/ts.svg'
import html from '../../assets/tech/html.svg'
import css from '../../assets/tech/css.svg'
import react from '../../assets/tech/react.svg'
import tailwind from '../../assets/tech/tailwind.svg'
import redux from '../../assets/tech/redux.svg'

import nodejs from '../../assets/tech/nodejs.svg'
import nestjs from '../../assets/tech/nestjs.svg'
import express from '../../assets/tech/express.svg'
import mongo from '../../assets/tech/mongo.svg'
import postgres from '../../assets/tech/postgres.svg'

import docker from '../../assets/tech/docker.svg'
import jest from '../../assets/tech/jest.svg'

import vsc from '../../assets/tech/vsc.svg'
import git from '../../assets/tech/git.svg'
import github from '../../assets/tech/github.svg'
import insomnia from '../../assets/tech/insomnia.svg'
import npm from '../../assets/tech/npm.svg'

import java from '../../assets/tech/java.svg'
import spring from '../../assets/tech/spring.svg'
import nextjs from '../../assets/tech/nextjs.svg'
import figma from '../../assets/tech/figma.svg'

function TechStack(){

    return <div className={styles.container}>
        <div className={styles.tech}>

            <div className={styles.frontend}>
                <h3>Frontend</h3>
                <div className={styles.section}>
                    <img src={js} alt="JavaScript" loading='lazy'/>
                    <img src={ts} alt="TypeScript" loading='lazy'/>
                    <img src={html} alt="HTML" loading='lazy'/>
                    <img src={css} alt="CSS" loading='lazy'/>
                    <img src={react} alt="React" loading='lazy'/>
                    <img src={tailwind} alt="Tailwind" loading='lazy' />
                    <img src={redux} alt="Redux" loading='lazy' />
                </div>
            </div>

            <div className={styles.backend}>
                <h3>Backend</h3>
                <div className={styles.section}>
                    <img src={nodejs} alt="Node.js" loading='lazy'/>
                    <img src={nestjs} alt="NestJS" loading='lazy'/>
                    <img src={express} alt="Express" loading='lazy'/>
                    <img src={mongo} alt="MongoDB" loading='lazy'/>
                    <img src={postgres} alt="PostgreSQL" loading='lazy'/>
                </div>
                
            </div>

            <div className={styles.devOps}>
                <h3>DevOps</h3>
                <div className={styles.section}>
                    <img src={docker} alt="Docker" loading='lazy'/>
                    <img src={jest} alt="Jest" loading='lazy'/>
                </div>
            </div>

            <div className={styles.tools}>
                <h3>Tools</h3>
                <div className={styles.section}>
                    <img src={vsc} alt="Visual Studio Code" loading='lazy'/>
                    <img src={git} alt="Git" loading='lazy'/>
                    <img src={github} alt="GitHub" loading='lazy'/>
                    <img src={insomnia} alt="Insomnia" loading='lazy'/>
                    <img src={npm} alt="NPM" loading='lazy'/>
                </div>
            </div>

            <div className={styles.learning}>
                <h3>Learning</h3>
                <div className={styles.section}>
                    <img src={java} alt="Java" loading='lazy'/>
                    <img src={spring} alt="Spring" loading='lazy'/>
                    <img src={nextjs} alt="Next.js" loading='lazy'/>
                    <img src={figma} alt="Figma" loading='lazy'/>

                </div>

            </div>
        </div>
    </div>
}

export default TechStack;