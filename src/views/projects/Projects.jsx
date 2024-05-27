import Project from '../../components/project/Project'
import styles from './Projects.module.css'

const projects = [
    {
        title: 'Doña Diabla',
        description: 'This restaurant project provides a platform for users to register, log in, schedule appointments, and delete them as needed.',
        technologies: [
            {
                name: 'React', 
                logo: 'Test'
            },
            {
                name: 'Redux'
            },
            {
                name: 'JavaScript'
            },
            {
                name: 'TypeScript'
            },
            {
                name: 'Express'
            }
        ],
        imgURL: 'Test'
    },
    {
        title: 'MovLoom',
        description: 'This movie website allows user to explore movie information, add new movies through a form, and store information in a database.',
        technologies: [
            {
                name: 'JavaScript', 
                logo: 'Test'
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
        imgURL: 'Test'
    }
    
]
function Projects(){
    return <div className={styles.projects}>
        <h2>Projects</h2>
        <div>
            {projects.map((project) => (
                <Project key={project.title} title={project.title} description={project.description} technologies={project.technologies} imgURL={project.imgURL}/>
            ))}
        </div>
    </div>
}

export default Projects