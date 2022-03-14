import { useState } from "react"

const App = () => {

  const [contador, setContador] = useState(0);

  const aumentar = () => {
      setContador(contador + 1);
  }

    const disminuir = () => {
      setContador(contador - 1);
  }

    const sumar10 = () => {
      setContador(contador + 10);
  }

    const porDos = () => {
      setContador(contador * 2);
  }

    const reset = () => {
      setContador(0);
  }

  return (
    <>
      <div className="container py-5 bg-light text-center">
      
        <h1>CONTADOR</h1>

        <button onClick={aumentar} className="btn btn-primary mx-4">
          Aumentar
        </button>

        <button onClick={disminuir} className="btn btn-danger">
          Disminuir
        </button>

        <button onClick={sumar10} className="btn10 btn btn-warning ms-5 me-3">
          +10
        </button>

        <button onClick={porDos} className="btn2 btn btn-warning">
          X2
        </button>

        <h3 className="p-4">{contador}</h3>

        <button onClick={reset} className="btnReset btn btn-secondary">
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
