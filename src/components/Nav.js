import React,{useState} from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {Button} from '@mui/material';
import { useDispatch} from 'react-redux';
import {changeLogginValueFalse} from '../features/isLogged/isLoggedSlice' ;

function Nav() {
    const counter = useSelector(state => state.Login.logValue);
    const [isAuth] = useState(counter);
    const dispatch = useDispatch();

    const navStyle = {
        color:'white'
    }
    const handleLogout = () => {
        if(isAuth){
            dispatch(changeLogginValueFalse())
        }
    };

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
            <Button
            variant="contained"
            type="submit" value="LOGIN"
            onClick = {handleLogout}
            >
                <Link style ={navStyle} to = '/login'>
                <li>
                    {(isAuth ? "Log out" : "Log in")}
                </li>
                </Link>
            </Button>
        </ul>
    </nav>
  );
}

export default Nav;