"use client";
import axios from "axios";
import React, { useState } from "react";

const SignUp=()=>{
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

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
        <form onSubmit={RegisterUser}>
        <div>Email</div>
        <input name="email" value={formData.email} onChange={handleChange} />
        
        <div>Password</div>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        
        <div>
            <button type="submit">Submit</button>
        </div>
        <div>
            Didnt have an account? <span className="text-blue-500 hover:underline cursor-pointer">Create One</span>
        </div>
    </form>
    )
}

export default SignUp;