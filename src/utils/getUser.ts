import { setUser } from "@/lib/features/user/userSlice";
import { AppDispatch } from "@/lib/store";
import api, { getCookie } from "@/services/api";
const getUser = async (dispatch:AppDispatch) => {
  const cookie=getCookie("auth")
  if (!cookie) {
    return false;
  }

  const user = await api.get("/users/verify/is-user");
  if (user?.status != 200) {
    return false;
  }
  dispatch(setUser(user?.data))
  return true;
};

export default getUser;
