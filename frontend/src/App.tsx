import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const App: React.FC = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3001/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  };

  const handleCreateItem = () => {
    axios.post('http://localhost:3001/api/items', newItem)
      .then(() => {
        setNewItem({ name: '', description: '' });
        fetchData();
      })
      .catch(error => console.error(error));
  };

  const handleUpdateItem = (id: string) => {
    // Implemente a lógica para atualizar o item
  };

  const handleDeleteItem = (id: string) => {
    axios.delete(`http://localhost:3001/api/items/${id}`)
      .then(() => fetchData())
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1>Items</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => handleUpdateItem(item._id)}>Update</button>
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Criar cadastro de item</h2>
      <div>
        <label>Nome:</label>
        <input type="text" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
      </div>
      <div>
        <label>Part Number:</label>
        <input type="text" value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />
      </div>
      <button onClick={handleCreateItem}>Criar</button>
    </div>
  );
}

export default App;