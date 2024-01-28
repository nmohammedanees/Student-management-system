import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate=useNavigate();
    const{id} =useParams();
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
    useEffect(()=>{
        loadUser();
    },[])
    const onSubmit= async(e)=>{
   e.preventDefault();
   await axios.put(`http://localhost:8080/user/${id}`,user);
   navigate("/");
    }   
    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`,user);
        setUser(result.data);
    }   
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" >
                <h2 className="text-center m-4">Edit User</h2>
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
                    placeholder="Enter Your E-mail adress"
                    name="department"
                    value={department}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        designation
                    </label>
                    <input type={"text"} className="form-control"
                    placeholder="Enter Your E-mail adress"
                    name="designation"
                    value={designation}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Salary
                    </label>
                    <input type={"Number"} className="form-control"
                    placeholder="Enter Your E-mail adress"
                    name="salary"
                    value={salary}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        DOB
                    </label>
                    <input type={"Date"} className="form-control"
                    placeholder="Enter Your E-mail adress"
                    name="dob"
                    value={dob}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Adress
                    </label>
                    <input type={"text"} className="form-control"
                    placeholder="Enter Your E-mail adress"
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
