import styles from './Project.module.css'
import Tag from '../tag/Tag'

function Project({title, description, technologies, imgURL}){
    return <div className={`${styles.project} ${styles.container}`} data-aos="fade-left">
        <div className={styles.info}>
            <h2 className='my-3'>{title}</h2>
            <p>{description}</p>

            {technologies.map((tech) => (
                <Tag key={tech.name} logo={tech.logo} name={tech.name}/>
            ))}

            <div className={styles.buttons}>
                <a href="">
                    <p>Code</p>
                    <img src="/assets/socials/github.svg" alt="" loading='lazy'/>
                </a>
                <a href="">
                    <p>Preview</p>
                    <img src="/assets/elements/link.svg" alt="" loading='lazy'/>
                </a>
            </div>
        </div>

        <div className={styles.project_img}>
            <img src={imgURL} alt="" loading='lazy'/>

        </div>
    </div>

}

export default Project;