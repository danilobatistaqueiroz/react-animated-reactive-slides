import screens from '../assets/screens.json'
import React from 'react';
import styles from './Slide.module.css'


function Slide() {
  const [active,setActive] = React.useState(0);

  const sectionRef = React.useRef();
  let width = React.useRef();

  const getWidth = () => {
    width.current = sectionRef.current.getBoundingClientRect().width;
  };

  React.useEffect(()=>{
    getWidth();
  })

  const prevSlide = () => {
    if (active <= 0) return;
    getWidth();
    setActive(a => a - 1);
  }
  const nextSlide = () => {
    if (active >= screens.length-1) return;
    getWidth();
    setActive(a => a + 1);
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.section} ref={sectionRef}>
        {
          screens.map((t, index) => (
            <article key={index} className={styles.articles} style={{transform:`translateX(-${width.current*active}px)`}}>
              <h1>{screens[index].title}</h1>
              <p>{screens[index].description}</p>
            </article>
          ))
        }
        </section>
        <nav className={styles.bottom}>
          <button className={styles.buttons} onClick={prevSlide}>Anterior</button>
          <button className={styles.buttons} onClick={nextSlide}>Próximo</button>
        </nav>
      </div>
    </main>
  )
}

export default Slide