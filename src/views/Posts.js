import React, {useState , useEffect} from 'react';
import '../App.css';
import Nav from '../components/Nav';
import PostCard from '../components/PostCard';
import Grid from '@mui/material/Grid'; 
import {Box,Button, Typography,Modal} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from '../features/PostReducer/PostsThunks.js'
import PostForm from "../components/AddPostForm"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Posts() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.Posts.users);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() =>{
        if(items.length === 0){
            dispatch(getPosts());
        }
    },[])

  return (
    <div>
        <Nav/>
        <div >
      <Button onClick={handleOpen}>Add Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <PostForm/>
        </Box>
      </Modal>
    </div>
        <Box style ={{padding: 20}}>
            <Grid container spacing={4} justifyContent="center">
                {
                items.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                     <PostCard props = {item}/>  
                    </Grid>          
                ))}
            </Grid>
        </Box> 
    </div>
  );
}

export default Posts;
