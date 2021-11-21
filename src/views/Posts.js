import React, {useState , useEffect} from 'react';
import '../App.css';
import Nav from '../components/Nav';
import PostCard from '../components/PostCard';
import Grid from '@mui/material/Grid'; 
import {Box,Button, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import {useLocation,useHistory} from 'react-router-dom';


function Posts() {

    const history = useHistory();
    const location = useLocation();
    const[items ,setItems] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);

    const previousPage = () =>{ 
        setCurrentPage(currentPage === 1 ? 1:currentPage - 1);
        console.log(currentPage); 
    }

    const nextPage = () =>{
        setCurrentPage(currentPage === 10 ? 10:currentPage + 1);
        console.log(currentPage);
    }
    useEffect(() =>{
        const fetchItems = async() => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`);
            history.replace(`${location.pathname}?page=${currentPage}`);
            const items = await data.json();
            setItems(items);
        };
        fetchItems();
    },[currentPage])

  return (
    <div>
        <Nav/>
        <Box style ={{padding: 20}}>
            <Stack spacing={2} justifyContent="space-around" p={4}>
            <Button
            size='small'
            color='primary'
            onClick={previousPage}
            >
            Last page
            </Button>
            <Typography component='h5' variant='h4'>
            {`Page: ${currentPage}`}
            </Typography>
            <Button
            size='small'
            color='primary'
            onClick={nextPage}
            >
             Next page 
            </Button>
            </Stack>
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
