import { useState, useEffect } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (callback)=>{
    const [errorMsg, setErrorMsg] = useState(null);

    const startWatching = async () => {
        try {
            await requestForegroundPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, 
            
            callback
            );
        } catch (error) {
            setErrorMsg(error);
        }
    };
    useEffect(() =>{
        startWatching();
    },[]);
    return [errorMsg]
}