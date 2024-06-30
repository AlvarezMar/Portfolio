import Project from '../../components/project/Project'
import styles from './Projects.module.css'
import img from '/images.png'
import projects from '../../assets/sections/projects.svg'

const portfolio = [
    {
        title: 'YouDrive',
        description: 'This movie website allows user to explore movie information, add new movies through a form, and store information in a database.',
        technologies: [
            {
                name: 'NestJS'
            },
            {
                name: 'Nextjs'
            },
            {
                name: 'Tailwind'
            },
            {
                name: 'PostgreSQL'
            },
            {
                name: 'TypeScript'
            }
        ],
        imgURL: img
    },
    {
        title: 'Doña Diabla',
        description: 'This restaurant project provides a platform for users to register, log in, schedule appointments, and delete them as needed.',
        technologies: [
            {
                name: 'React', 
            },
            {
                name: 'Redux'
            },
            {
                name: 'JavaScript'
            },
            {
                name: 'TypeScript',
            },
            {
                name: 'Express'
            },
        ],
        imgURL: img
    },
    {
        title: 'Movloom',
        description: 'This movie website allows user to explore movie information, add new movies through a form, and store information in a database.',
        technologies: [
            {
                name: 'JavaScript', 
            },
            {
                name: 'Express'
            },
            {
                name: 'MongoDB'
            },
            {
                name: 'Mongoose'
            }
        ],
        imgURL: img
    }
    
]
function Projects(){
    return <div className={styles.projects} id='proyects'>
        <div className={styles.projects_heading}>
            <div className={styles.section} data-aos="fade-zoom-in">
                <img src={projects} alt="Projects section" width='30px'/>
                <h2>Latest Projects</h2>
            </div>
        </div>
        <div className={styles.portfolio}>
            {portfolio.map((project) => (
                <Project key={project.title} title={project.title} description={project.description} technologies={project.technologies} imgURL={project.imgURL}/>
            ))}
        </div>
    </div>
}

export default Projects