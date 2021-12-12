import React,{useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar2";
import Homepage from "./components/Homepage/Homepage";
import { useSelector } from "react-redux";
import { login,logout, selectUser } from "./features/counter/userSlice";
import Login from "./components/auth/Login";
import { useDispatch } from "react-redux";
import {auth} from "./firebase"

function App() {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            displayName:authUser.displayName,
            email:authUser.email,
          })
        );
        console.log(authUser);
      }else{
        dispatch(logout);
      }
    })

  }, [dispatch])

  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Homepage />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
