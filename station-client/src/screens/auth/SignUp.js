import { StyleSheet, ScrollView, Text, View } from "react-native";
import React, { useState, useContext } from "react";

import CustomInput from "../../components/customInput/CustomInput";
import FormContainer from "../../components/FormContainer";
import CustomButton from "../../components/customButton/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Context as AuthContext } from "../../context/AuthContext";

const icon = [
  <MaterialIcons name="account-circle" size={24} color="black" />,
  <MaterialIcons name="email" size={24} color="black" />,
  <FontAwesome name="lock" size={24} color="black" />,
];

const SignUp = ({ navigation }) => {
  
  
  const { state, signup } = useContext(AuthContext);
  const signupFunction = () => {

  };

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  // const [passwordRepeat, SetPasswordRepeat] = useState("");

  const onSignInPressed = () => {
    navigation.navigate("signin");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };

  const onTermPressed = () => {
    console.warn("onTermPressed");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };
  console.log(state.errorMessage);

  return (
    <View style={styles.root}>
      <FormContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Create a new account</Text>

          {/* <CustomInput
            placeholder="Username"
            value={username}
            setValue={SetUsername}
            icon={icon[0]}
          /> */}
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={SetEmail}
            icon={icon[1]}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={SetPassword}
            secureTextEntry={true}
            icon={icon[2]}
          />
          {/* <CustomInput
            placeholder="Confirm Password"
            value={passwordRepeat}
            setValue={SetPasswordRepeat}
            secureTextEntry={true}
            icon={icon[2]}
          /> */}
          {state.errorMessage ?
            <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null
            }
          
          <CustomButton
            text="Sign Up"
            onPress={() => signup({ email, password, navigation })}
          />
          <Text style={styles.text}>
            By registering, you confirm that you accept our{" "}
            <Text style={styles.link} onPress={onTermPressed}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={styles.link} onPress={onPrivacyPressed}>
              Policy
            </Text>
          </Text>
          <CustomButton
            text="Sign Up With Google"
            onPress={onSignInGoogle}
            bgColor="#b4814b"
            fgColor="#fff"
          />
          <CustomButton
            text="Alread has an account? Sign in"
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
  text: {
    color: "gray",
  },
  link: {
    color: "#411900",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
});

export default SignUp;
