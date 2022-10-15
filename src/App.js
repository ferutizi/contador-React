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
        <p>hola</p>
        <h1>CONTADOR</h1>
        <button
          data-testid="aumentar"
          onClick={aumentar}
          className="btn btn-primary mx-4">
          Aumentar
        </button>
        <button
          data-testid="disminuir"
          onClick={disminuir}
          className="btn btn-danger">
          Disminuir
        </button>
        <button
          data-testid="sumar10"
          onClick={sumar10}
          className="btn10 btn btn-warning ms-5 me-3">
          +10
        </button>
        <button
          data-testid="porDos"
          onClick={porDos}
          className="btn2 btn btn-warning">
          X2
        </button>
        <h3 className="p-4">{contador}</h3>
        <button
          data-testid="reset"
          onClick={reset}
          className="btnReset btn btn-secondary">
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
