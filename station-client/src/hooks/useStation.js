import React,{useContext} from "react";
import { StationContext } from "../context/StationContext";


export const useStation = () => {
    const context = useContext( StationContext);

    if(!context){
        throw Error('useStation must be used inside a stationProvider')
    }

    return context
}