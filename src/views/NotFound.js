import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <div>
        <h1>Not Found</h1>
        <Link to = '/about'> Return to landing page</Link>   
    </div>
  );
}

export default NotFound;