import { ImageBackground, View } from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require('../../assets/washing.png')} style={{ height: '100%', opacity: 0.8 }}/>
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
};

export default Background;
