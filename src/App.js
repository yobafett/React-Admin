import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(function (response) {
        console.log(response.data);
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }, []);

  const listContent = list.map(item => {
    return (
      <li key={item.id}>
        author_id: {item.author_id}<br/>
        created: {item.created}<br/>
        description: {item.description}<br/>
        text: {item.text}<br/>
        title: {item.title}<br/>
        updated: {item.updated}<br/>
      </li>
    )
  });

  return (
    <div className="App">
      <div className='ItemsList'>
        <ul>{listContent}</ul>
      </div>
    </div>
  );
}

export default App;
