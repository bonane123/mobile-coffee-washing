import {
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/customInput/CustomInput";
import FormContainer from "../../components/FormContainer";
import CustomButton from "../../components/customButton/CustomButton";

const ConfirmEmail = ({navigation}) => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    navigation.navigate('home')
  };
  const onResendPressed = () => {};

  const onSignInPressed = () => {
    navigation.navigate('signin');
  };
  return (
    <View style={styles.root}>
      <FormContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Confirm your email</Text>

          <CustomInput
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
          />
          <CustomButton text="Confirm" onPress={onConfirmPressed} />
          <CustomButton
            text="Resend Code"
            onPress={onResendPressed}
          />
          <CustomButton
            text="Back to Sign In"
            onPress={onSignInPressed}
            type="TERTIALY"
          />
        </ScrollView>
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({

  root: {
    alignContent: "center",
    padding: 20,
    height: "100%",
    backgroundColor: "#F9FBFC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 30,
    color: "#411900",
  },
  text:{
    color: "gray",
  },
  link: {
    color: "#411900"
  }
});

export default ConfirmEmail;
