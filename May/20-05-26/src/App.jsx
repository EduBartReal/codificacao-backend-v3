import { useState } from 'react';

function App() {
  const [frutas, setFrutas] = useState([]);

  async function handleClick() {
    try {
      const response = await fetch('http://localhost:3000/frutas');
      const data = await response.json();
      console.log('✅ Frutas:', data);
      setFrutas(data);
    } catch (error) {
      console.error('❌ Erro:', error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Buscar Frutas</button>
      <ul>
        {frutas.map((fruta) => (
          <li key={fruta.id}>
            {fruta.name} - {fruta.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;