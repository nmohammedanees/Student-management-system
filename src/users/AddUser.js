import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
    let navigate=useNavigate();
    const[user,setUser]=useState({
        name:"",
        department:"",
        designation:"",
        salary:"",
        dob:"",
        address:""
    });
    const {name,department,designation,salary,dob,address}=user
    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit= async(e)=>{
   e.preventDefault();
   await axios.post("http://localhost:8080/user",user);
   navigate("/");
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" >
                <h2 className="text-center m-4">Register User</h2>
                <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type={"text"} className="form-control"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Department
                    </label>
                    <input type={"text"} className="form-control"
                    placeholder="Enter Your Department"
                    name="department"
                    value={department}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        designation
                    </label>
                    <input type={"text"} className="form-control"
                    placeholder="Enter Your Designation"
                    name="designation"
                    value={designation}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Salary
                    </label>
                    <input type={"Number"} className="form-control"
                    placeholder="Enter Your Salary"
                    name="salary"
                    value={salary}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        DOB
                    </label>
                    <input type={"Date"} className="form-control"
                    placeholder="Enter Your Date-of-birth"
                    name="dob"
                    value={dob}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Adress
                    </label>
                    <input type={"text"} className="form-control"
                    placeholder="Enter Your adress"
                    name="address"
                    value={address}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>  
            </div>
        </div>
    </div>
  )
}
