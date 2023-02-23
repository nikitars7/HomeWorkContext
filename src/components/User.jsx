import { UserContext } from "../App";
import { useContext,useEffect } from "react";
const User = () => {
  const { user, setUser } = useContext(UserContext);
  useEffect(()=>{
   const createUser = () => {
      const userName = prompt("Enter your name", "");
      if(userName.trim() === ''){
        setUser('Default Name')
      }else{
      setUser(userName);
      }
    }
    createUser()
  },[setUser])
  return <div >UserName: {user}</div>;
};

export default User;
