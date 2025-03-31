"use client";
import axios from "axios";
import React, { useState } from "react";
import "../../globals.css"
import { useDispatch } from "react-redux";
const SignUp=()=>{
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const dispatch=useDispatch();

    const handleChange=(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const RegisterUser=async(e:any)=>{
        e.preventDefault();
        try {
            const res=await axios.post(`${process.env.SERVER}/users/login`,{
                email:formData.email,
                password:formData.password
            })
            document.cookie=`auth=${res?.data?.message}; path=/; max-age=3600`;
        } catch (error) {
            
        }
    }
    return(
        <div className="flex justify-center items-center h-[100vh]">
        <form onSubmit={RegisterUser} className="flex flex-col gap-2">
        <div className="sub-heading">Email</div>
        <input name="email" value={formData.email} onChange={handleChange} className="ipt"/>
        
        <div className="sub-heading">Password</div>
        <input type="password" name="password" value={formData.password} onChange={handleChange} className="ipt"/>
        
        <div className="flex items-center justify-end">
            <button type="submit" className="submit">Submit</button>
        </div>
        <div>
            Didnt have an account? <span className="text-blue-500 hover:underline cursor-pointer">Create One</span>
        </div>
    </form>
    </div>
    )
}

export default SignUp;