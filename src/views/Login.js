import React,{useState} from 'react';
import LoginForm from '../components/LoginForm';
import {useHistory} from 'react-router-dom';
import Nav from '../components/Nav';
import '../App.css';

function LoginScreen() {
    const history = useHistory();
    const [error,setError] = useState("");

    const adminUser = {
        email: "example@example.com",
        password: "password"
    }

    const Login = details =>{
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password){
            localStorage.setItem('authorized', '1');
            history.push('/posts');
        }
        else{
            console.log('Not match');
            setError('Wrong email or password')
        }
    }

  return (
    <div>
        <Nav/>
        <LoginForm Login ={Login} error = {error}/>  
    </div>
  );
}

export default LoginScreen;
