import Header from "../../components/header/Header"
import CircularText from '../../components/circularText/CircularText'
import styles from './Home.module.css'

function Home(){

    return <div className={`${styles.home}`}>
        <Header/>
        <CircularText/>
    </div>
}

export default Home