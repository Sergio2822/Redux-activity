import React, {useState , useEffect} from 'react';
import {Button} from '@mui/material';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import Nav from '../components/Nav';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {setSelectedUser} from '../features/PostReducer/PostsSlice'
function PostById() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() =>{
        fetchItem();
    },[]);
    
    
    const handleReturnToPosts= () => {
      history.push('/posts');
     };

    const fetchItem = async() => {
        dispatch(setSelectedUser(params.id)); //update ID
        
    }
    const itm = useSelector(state => state.users.users);

  return (
    <div>
        <Nav/>
        <h1>{itm[params.id - 1].title}</h1>
        <h2>{itm[params.id - 1].body}</h2>
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