import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({props}) {
  return (
    <Card sx={{ minWidth: 200   ,
      display: "grid",
      gridTemplateRows: "100px 50px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
         {props.title}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Link to = {`/posts/${props.id}`}> Read More</Link>       
      </CardActions>
    </Card>
  );
}