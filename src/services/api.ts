import axios from "axios"

const SERVER_BASE_URL=process.env.SERVER

const api=axios.create({
    baseURL:SERVER_BASE_URL,
    withCredentials:true
})

api.interceptors.request.use(
    (config)=>{
        config.headers.Authorization=`Bearer ${getCookie("auth")}`;
    return config;
    },
    (error)=>Promise.reject(error)
)

const getCookie = (name: string) =>{
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`))
      ?.split("=")[1] || "";
}

export default api;