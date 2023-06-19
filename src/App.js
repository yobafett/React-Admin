import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostList from './components/PostList/PostList';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ModalForm from './components/ModalForm/ModalForm';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);



  return (
    <div className="App">
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col>
            <PostList posts={posts} />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <ModalForm buttonStyle={{ 'width': '100%' }} />
          </Col>
          <Col></Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
