import styles from './Status.module.css'

import availability from '../../assets/stats/availability.svg'
import location from '../../assets/stats/location.svg'
import { useEffect } from 'react'

function Status(){

    useEffect(() => {
        const updatePosition = () => {
            const imageElement = document.getElementById('image-container')
            if(imageElement){
                const imageRect = imageElement.getBoundingClientRect()
    
                const xCoord = imageRect.left + window.scrollX + 2;
                const yCoord = imageRect.top + window.scrollY + 370;
    
                document.getElementById('stats-container').style.left = `${xCoord}px`
                document.getElementById('stats-container').style.top = `${yCoord}px`
            }
        }

        updatePosition()

        window.addEventListener('resize', updatePosition)

        return () => {
            window.removeEventListener('resize', updatePosition);
        };
    }, [])

    return <div className={styles.container} id='stats-container'>
        <div className={styles.stats}>
            <div className={styles.statBadge}>
                <img src={availability} alt="" width='60px'/>
                <div className={styles.tooltip}>
                    <p>Available to work</p>
                </div>

            </div>
            <div className={styles.statBadge}>
                <img src={location} alt="" width='60px'/>
                <div className={styles.tooltip}>
                    <p>Open to relocate</p>
                </div>

            </div>
        </div>
    </div>
}

export default Status;