import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

function AddPostForm({Login}) {

    const[details,setDetails]=useState({email:"", password:""});
 
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
                <h2>Post Info</h2>
                <div className="form-group">
                    <TextField multiline  label="Title" id="Body" onChange = {e => setDetails({...details, email: e.target.value})}  value={details.email} />
                </div>
                <div className="form-group">
                    <TextField multiline label="Body" id="Body" onChange = {e => setDetails({...details, password: e.target.value})}  value={details.password} />
                </div>
                <div>
                    <Button
                    variant="contained"
                     value="LOGIN"
                    >
                    Submit
                    </Button>
                </div>
            </div>
        </form>

  );
}

export default AddPostForm;
