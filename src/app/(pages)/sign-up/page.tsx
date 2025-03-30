"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp=()=>{
    const router=useRouter()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const handleChange=(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const RegisterUser=async(e:any)=>{
        e.preventDefault();
        const res=await axios.post(`${process.env.SERVER}/users/register`,{
            first_name:formData.firstName,
            last_name:formData.lastName,
            email:formData.email,
            phone:formData.phoneNumber,
            password:formData.password
        })
    }
    return(
        <form onSubmit={RegisterUser}>
        <div>First Name</div>
        <input name="firstName" value={formData.firstName} onChange={handleChange} />
        
        <div>Last Name</div>
        <input name="lastName" value={formData.lastName} onChange={handleChange} />
        
        <div>Email</div>
        <input name="email" value={formData.email} onChange={handleChange} />
        
        <div>Phone Number</div>
        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        
        <div>Password</div>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        
        <div>
            <button type="submit">Submit</button>
        </div>
        <div>
            Already have an account? <span className="text-blue-500 hover:underline cursor-pointer" onClick={()=>router.push("/login")}>Sign in</span>
        </div>
    </form>
    )
}

export default SignUp;