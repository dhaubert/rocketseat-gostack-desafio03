import React, {useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("repositories").then(
      (response) => {
        setRepositories(response.data)
      }
    )
  }, []);

  async function handleAddRepository() {
    const newRepository = {
      title: `Novo Repositório ${Date.now()}`,
      techs: ['tech', 'nolo', 'gies'], 
    };
    const response = await api.post("repositories", newRepository);
    const registeredRepository = response.data;
    setRepositories([ ...repositories, registeredRepository ]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`);
    if (response.status === 204) {
      setRepositories(repositories.filter(repo => repo.id !== id));
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
