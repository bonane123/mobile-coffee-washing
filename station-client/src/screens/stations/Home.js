import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 40
    }
});
export default Home;
