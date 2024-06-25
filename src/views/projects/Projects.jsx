import Project from '../../components/project/Project'
import styles from './Projects.module.css'
import img from '/images.png'

const projects = [
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
    return <div className={styles.projects}>
        <div className={styles.projects_heading}>
            <h2>Last Projects</h2>
        </div>
        <div className={styles.prueba}>
            {projects.map((project) => (
                <Project key={project.title} title={project.title} description={project.description} technologies={project.technologies} imgURL={project.imgURL}/>
            ))}
        </div>
    </div>
}

export default Projects