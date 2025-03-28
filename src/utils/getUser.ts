import api from "@/services/api";

const getUser=async()=>{
    const cookie=document.cookie
    if (!cookie){
        return false;
    }

    const user=await api.get("/users/is-user")
    if (user?.status!=200){
        return false;
    }
    return true;
}

export default getUser