import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";


const CustomInput = ({ value, setValue, placeholder, secureTextEntry, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconStyle}>{icon}</View>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            secureTextEntry={secureTextEntry}
          />
    </View>
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
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginRight: 15,
  },
});

export default CustomInput;
