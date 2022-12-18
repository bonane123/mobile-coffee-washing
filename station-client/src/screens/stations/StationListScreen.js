import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import axiosInstance from "../../api/station";
import ResultsList from "../../components/ResultsList";
import { useStation } from "../../hooks/useStation";
import { Context } from "../../context/AuthContext";




const StationListScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {state} = useContext(Context);
const {stations, dispatch} = useStation();

useEffect(()=>{
  const fetchData = async()=>{
      setLoading(true)
      try {
          const response = await axiosInstance.get('/stations')
          const json = await response.data;
          console.log(json);
          
          
            dispatch({type: 'SET_STATIONS', payload: json})
         
      } catch (error) {
          console.log(error.message);
          
      }
      setLoading(false)
  }
  fetchData()
},[state])

// console.log(stations);


  

  return (
    <>
       { loading ? <View style={styles.loadView} >
        <Text style={styles.load}>Loading...</Text>
        </View> : <ScrollView>
        <ResultsList
          title="All Available Stations"
          results={stations}
          navigation={navigation}
        />
      </ScrollView>}
     
    </>
  );
};

const styles = StyleSheet.create({
  load: {
    width: "100%",
    fontSize: 25,
    fontWeight: "bold",
    
  },
  loadView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 120
  }
});




export default StationListScreen;
