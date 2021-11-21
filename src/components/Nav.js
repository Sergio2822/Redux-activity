import React,{useState} from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const [isAuth] = useState(localStorage.getItem('authorized') === '1');
    const navStyle = {
        color:'white'
    }
  return (
    <nav>
        <h3>Logo</h3>
        <ul className ="nav-links">
            
            <Link style ={navStyle} to = '/about'>
                <li>About</li>
            </Link>
            <Link style ={navStyle} to = '/posts'>
                <li>{(isAuth ? "Posts" : "")}</li>
            </Link>
            <Link style ={navStyle} to = '/login'>
                <li>
                {(isAuth ? "Log out" : "Log in")}
                </li>
                
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;