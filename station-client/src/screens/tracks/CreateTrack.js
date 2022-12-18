import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Map from "../../components/Map";
import "../../_mockLocation";
import { Context as LocationContext } from "../../context/LocationContext";
import useLocation from "../../hooks/useLocation";
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";

const CreateTrack = () => {
  const {
    state: { name, recording, locations },
    addLocation,
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  
  

  const [errorMsg] = useLocation(addLocation, (location) => {
    addLocation(location, state.recording);
  });

  return (
    <ScrollView>
      <Map />

      {errorMsg ? <Text>Please enable location services</Text> : ""}
      <View style={{ marginTop: 50 }}>
        <View style={styles.container}>

        <TextInput
        style={styles.input}
          value={name}
          placeholder="Address"
          onChangeText={changeName}
        />
        </View>
        {recording ? (
          <CustomButton text="Stop" onPress={stopRecording} />
        ) : (
          <CustomButton text="Start Recording" onPress={startRecording} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        height: 50,
      },
    input: {
        paddingVertical: 10,
        flex: 1,
        fontSize: 18,
      }
});

export default CreateTrack;
