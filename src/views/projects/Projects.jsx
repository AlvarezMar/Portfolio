import Project from '../../components/project/Project'
import styles from './Projects.module.css'
// import img from '/images.png'
import projects from '../../assets/sections/projects.svg'

const portfolio = [
    {
        title: 'YouDrive',
        description: 'Collaborative application for managing vehicle rental information. This application allows users to post, modify vehicles, and manage rental processes.',
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
        imgURL: 'https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203034/youDrive_dw21hi.png',
        repoURL: 'https://github.com/maccari78/PM6-grupo3',
        websiteURL: 'https://youdrive.vercel.app/'
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
        imgURL: 'https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203128/Do%C3%B1a_Diabla_v1_fkav1i.png',
        repoURL: 'https://github.com/AlvarezMar/Dona-Diabla',
        websiteURL: ''
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
        imgURL: 'https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203131/MovLoom_v1_xwayle.png',
        repoURL: 'https://github.com/AlvarezMar/MovLoom',
        websiteURL: ''
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
                <Project key={project.title} title={project.title} description={project.description} technologies={project.technologies} imgURL={project.imgURL} repoURL={project.repoURL} websiteURL={project.websiteURL}/>
            ))}
        </div>
    </div>
}

export default Projects