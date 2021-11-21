import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

function LoginForm({Login,error}) {
    const[details,setDetails]=useState({email:"", password:""});
    localStorage.setItem('authorized', '0'); 
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
  return (
        <form onSubmit = {submitHandler}>
            <div className="form-inner" style={{
                paddingBlock:"50px",
                display:"grid",
                justifyContent:"center",
                gap:"15px"
            }}>
                <h2>Log in</h2>
                {(error != "")?(<div className="error">{error}</div>):""}
                <div className="form-group">
                    <TextField type="email" label="email" id="email" onChange = {e => setDetails({...details, email: e.target.value})}  value={details.email} />
                </div>
                <div className="form-group">
                    <TextField type="password" label="password" id="password" onChange = {e => setDetails({...details, password: e.target.value})}  value={details.password} />
                </div>
                <div>
                    <Button
                    variant="contained"
                    type="submit" value="LOGIN"
                    >
                    Submit
                    </Button>
                </div>
            </div>
        </form>

  );
}

export default LoginForm;
