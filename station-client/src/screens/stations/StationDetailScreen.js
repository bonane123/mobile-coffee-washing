import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/station";
import CustomButton from "../../components/customButton/CustomButton";
import { useStation } from "../../hooks/useStation";

const StationDetailScreen = ({ navigation, route }) => {
  const { dispatch } = useStation();
  const [result, setResult] = useState(null);

  const { id } = route.params;

  const getResult = async () => {
    try {
      const response = await axiosInstance.get(`stations/${id}`);
      const json = response.data
      if(json){

        setResult(json);
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };

  const deleteResult = async () => {

    try {
      // alert(`Are you sure you want to delete Station ?`);
      const response = await axiosInstance.delete(`stations/${id}`);
      const json = await response.data;
      if(json){
        dispatch({type: 'DELETE_STATION', payload: json});
        navigation.navigate("Station List");
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  if (!result) {
    return null;
  }
  // console.log(result);

  return (
    <View style={styles.containerDetails}>
      <View>
        <Image source={{ uri: result.photo }} style={styles.image} />
        <View style={styles.subView}>
          <Text style={styles.stationName}>Name: {result.title}</Text>
          <Text style={styles.stationName}>Coffee Type: {result.coffee}</Text>
          <Text style={styles.stationName}>Quantity: {result.quantity}</Text>
          <Text style={styles.stationName}>Location: {result.location}</Text>
        </View>
        <CustomButton
          text="DELETE STATION"
          onPress={deleteResult}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetails: {
    borderColor: "#411900",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 5,
    flex: 1,
    margin: 20,
  },
  subView: {
    backgroundColor: "#411900",

    borderRadius: 5,
    margin: 30,
    height: 265,
    width: 300,
    padding: 10,
  },
  spinner: {
    fontSize: 30,
    color: "#411900",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: 100,
  },
  image: {
    width: 300,
    height: 120,
    borderRadius: 4,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  stationName: {
    color: "white",
    fontSize: 18,
    marginBottom: 30,
  },
});

export default StationDetailScreen;
