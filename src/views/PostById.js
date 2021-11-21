import React, {useState , useEffect} from 'react';
import {Button} from '@mui/material';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import Nav from '../components/Nav';
import '../App.css';


function PostById() {
    const params = useParams();
    const history = useHistory();

    useEffect(() =>{
        fetchItem();
    },[]);
    
    const[item ,setItem] = useState({});
    
    const handleReturnToPosts= () => {
      history.push('/posts');
     };

    const fetchItem = async() => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

        const item = await data.json();
        setItem(item);
    }
  return (
    <div>
        <Nav/>
        <h1>{item.title}</h1>
        <h2>{item.body}</h2>
        <Button
        style={{ marginTop: '2rem' }}
        color='primary'
        onClick={handleReturnToPosts}
      >
        Return to posts
      </Button>
    </div>
  );
}

export default PostById;