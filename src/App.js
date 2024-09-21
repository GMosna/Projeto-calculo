import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
  e.preventDefault();
    const total = Number(num1) + Number(num2);
    setResultado(total);
  };

  return (
      <div>
        <h1>Soma dos Valores</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button type="submit">Calcular</button>
      </form>
      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
    </div>
  );
}

export default App;

