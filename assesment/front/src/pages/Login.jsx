import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const login=()=>{
        axios.post("http://localhost:3001/login",{
            email:email,
            pwd:password,
        }).then((res)=>{
            if(res.data.msg==="Login success"){
                alert(res.data.msg)
                navigate(`/home/:${res.data.UId}`);
            }
            else{
                alert(res.data.msg);
            }
        });
        
    }
    return   <div className="container" style={{margin: '5%'}}>
  
    <div className="form-group">
        <input type="text"
               placeholder="Enter Email"
               className="form-control"
               style={{margin: '10px'}}
               onChange={(event) => {
                setEmail(event.target.value);

              }}
            
            
        />
        <input type="text"
               placeholder="Enter Password"
               className="form-control"
               style={{margin: '10px'}}
               onChange={(event) => {
                setPassword(event.target.value);

              }}
              
        />


        <button className="btn btn-primary" style={{margin: '10px'}} onClick={login}>Login</button>

    </div>
</div>
}
export default Login