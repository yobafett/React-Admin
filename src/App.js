import axios from 'axios';
import { useState, useEffect } from 'react';
import PostList from './components/PostList/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <div className='ItemsList'>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
