import React,{useContext, useEffect} from "react";
import {Context} from "../../context/AuthContext";

const ResolveScreen = ({navigation}) => {
  const {state, signin, tryLocalSignin} = useContext(Context);
  
  useEffect(()=>{
    tryLocalSignin(navigation);
  }, [])
  return null;
};

export default ResolveScreen;
