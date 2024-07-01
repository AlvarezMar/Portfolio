import Header from "../../components/header/Header"
// import CircularText from '../../components/circularText/CircularText'
import styles from './Home.module.css'
import Status from "../../components/status/Status"

function Home(){

    return <div className={`${styles.home}`} id="home">
        <Header/>
        {/* <CircularText/> */}
        <Status/>
    </div>
}

export default Home