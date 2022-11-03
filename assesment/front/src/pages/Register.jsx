import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const submit=()=>{
        axios.post("http://localhost:3001/register",{
            email:email,
            pwd:password,
        }).then((res)=>{
            if(res.data==="Register"){
                navigate("/")
            }
        }
            
        )

    }
    return (
        <div className="container" style={{margin: '5%'}}>
            <div className="form-group">
                <input type="text"
                       placeholder="Enter Email"
                       className="form-control"
                       style={{margin: '10px'}}
                       onChange={(event) => {
                        setEmail(event.target.value);
      
                      }}
                    value={email}
                       
                />
                <input type="text"
                       placeholder="Enter Password"
                       className="form-control"
                       style={{margin: '10px'}}
                       onChange={(event) => {
                        setPassword(event.target.value);
      
                      }}
                      value={password} 
                />

                <button
                    className="btn btn-dark"
                    // style={{padding: '20px',backgroundColor:"blue"}}
                    onClick={submit}
                >
                    Register
                </button>

            

            </div>
        </div>


    )


}




export default Register ;
