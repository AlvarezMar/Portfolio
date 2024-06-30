import { useEffect } from 'react'
import styles from './CircularText.module.css'
import { useRef } from 'react'

function CircularText(){
    const divRef = useRef(null)

    useEffect(() => {
        // Verifica si la referencia divRef.current no es null
        if (divRef.current) {
          // Selecciona el elemento <p> dentro del div referenciado
          const textElement = divRef.current.querySelector('p');
          // Verifica si el elemento <p> no es null
          if (textElement) {
            const textContent = textElement.innerText; // Obtiene el texto del elemento <p>
            // Divide el texto en caracteres individuales y envuelve cada uno en un <span>
            textElement.innerHTML = textContent
              .split('')
              .map((char, i) => `<span style='transform:rotate(${i * 8.3}deg)'>${char}</span>`)
              .join(''); // Junta todos los <span> en un solo string
          }
        }
      }, []); 

    return <div className={styles.circle} data-aos="fade-zoom-in" data-aos-duration="700">
        <div className={styles.inner}></div>
        <div className={styles.text} ref={divRef}>
            <p>Scroll down - Scroll down - </p>
        </div>

    </div>

}

export default CircularText