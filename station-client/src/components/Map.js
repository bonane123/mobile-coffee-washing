import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
import { ActivityIndicator } from "react-native";
import '../_mockLocation'
const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  // console.log(state);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  const points = {...currentLocation.coords};
// console.log(points);

   
  
  
  
  
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1)"
        fillColor="rgba(158,158,255,0.3)"
        />

            {/* <Polyline coordinates={{ points, points }}/> */}
        

      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
