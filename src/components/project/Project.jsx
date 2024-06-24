import styles from './Project.module.css'
import Tag from '../tag/Tag'

function Project({title, description, technologies, imgURL}){
    return <div className={`${styles.project} ${styles.container}`}>
        <div className={styles.info}>
            <h2>{title}</h2>
            <p>{description}</p>

            {technologies.map((tech) => (
                <Tag key={tech.name} logo={tech.logo} name={tech.name}/>
            ))}

            <div className={styles.buttons}>
                <a href="">
                    Code
                    <img src="/src/assets/socials/github.svg" alt="" />
                </a>
                <a href="">
                    Preview
                    <img src="/src/assets/elements/link.svg" alt="" />
                </a>
            </div>
        </div>

        <div className={styles.project_img}>
            <img src={imgURL} alt="" />

        </div>
    </div>

}

export default Project;