import styles from './Project.module.css'
import Tag from '../tag/Tag'

import github from '../../assets/socials/github.svg'
import link from '../../assets/elements/link.svg'

function Project({title, description, technologies, imgURL, repoURL, websiteURL}){

    return <div className={`${styles.project} ${styles.container}`} data-aos="fade-left">
        <div className={styles.info}>
            <h2 className='my-3'>{title}</h2>
            <p>{description}</p>

            {technologies.map((tech) => (
                <Tag key={tech.name} logo={tech.logo} name={tech.name}/>
            ))}

            <div className={styles.buttons}>
                <a href={repoURL} target='_blank'>
                    <p>Code</p>
                    <img src={github} alt="" loading='lazy'/>
                </a>
                <a href={websiteURL} target='_blank' style={{pointerEvents: websiteURL ? 'auto' : 'none'}}>
                    <p>Preview</p>
                    <img src={link} alt="" loading='lazy'/>
                </a>
            </div>
        </div>

        <div className={styles.project_img}>
            <img src={imgURL} alt="" loading='lazy'/>

        </div>
    </div>

}

export default Project;