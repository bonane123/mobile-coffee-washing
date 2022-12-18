import stationApi from "../api/station";
import { createContext, useReducer } from "react";

const stationsReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATIONS":
      return { stations: action.payload };
    case "ADD_STATION":
      return { stations: [action.payload, ...state.stations] };
    
    case 'DELETE_STATION':
        return { stations: state.stations.filter((station)=> station._id !== action.payload._id)}
    default:
      return state;
  }
};

export const StationContext = createContext();

export const StationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stationsReducer, { stations: [] });

  return (
    <StationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StationContext.Provider>
  );
};
