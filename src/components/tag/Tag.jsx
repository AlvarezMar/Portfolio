import styles from './Tag.module.css'

function Tag({name}){
    return <div className={styles.tag}>
        <span>#{name}</span>
    </div>
}

export default Tag