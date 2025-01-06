import './App.css'
import telas from './assets/telas.json'
import Slide from './components/Slide.jsx'
import React from 'react'

function App() {
  const [ativo,setAtivo] = React.useState(0);
  const handleAnterior = () => {
    if (ativo <= 0) return;
    setAtivo(a => a - 1);
  }
  const handleProximo = () => {
    if (ativo >= telas.length-1) return;
    setAtivo(a => a + 1);
  }
  return (
    <>
     <Slide slide={ativo} />
     <button onClick={handleAnterior}>Anterior</button>
     <button onClick={handleProximo}>Próximo</button>
    </>
  )
}

export default App
