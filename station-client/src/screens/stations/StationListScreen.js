import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const StationListScreen = ({navigation}) => {
  const stationDetails = ()=>{
    navigation.navigate('station details')
  }
  
  return (
    <View>
      <Text>StationListScreen</Text>
      <TouchableOpacity onPress={stationDetails}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StationListScreen;
