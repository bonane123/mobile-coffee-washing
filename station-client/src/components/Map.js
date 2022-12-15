import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView,{Polyline} from 'react-native-maps';

const Map = () => {

    let points = [];
    for (let i = 0; i <20; i++) {
        if(i % 2 === 0){

            points.push({
                latitude: -1.935114 + i * 0.001,
                longitude: 30.082111 + i * 0.001
            });
        }else{
            points.push({
                latitude: -1.9351141 - i * 0.001,
                longitude: 30.082111 + i * 0.001
            });
        }
    }
  return (
    <View>
      <MapView style={styles.map} initialRegion={
{
    latitude: -1.935114,
    longitude: 30.082111,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
}
      }
      >
        <Polyline coordinates={points} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
    map:{
        height: 300
    }
});

export default Map;
