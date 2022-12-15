import {
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  View,
  Text
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../../assets/coffee.png";
import CustomInput from "../../components/customInput/CustomInput";
import FormContainer from "../../components/FormContainer";
import CustomButton from "../../components/customButton/CustomButton";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Context } from "../../context/AuthContext";



const icon = [
<MaterialIcons name="account-circle" size={24} color="black" />,
<MaterialIcons name="email" size={24} color="black" />,
<FontAwesome name="lock" size={24} color="black" />
]


const SignIn = ({navigation}) => {
  const {state, signin, tryLocalSignin} = useContext(Context);
  
  // useEffect(()=>{
  //   tryLocalSignin(navigation);
  // }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  // const onSignInPressed = () => {
  //   navigation.navigate("Stations");
  // };
  const onForgotPasswordPressed = () => {
    // console.warn("onForgotPasswordPress");
    navigation.navigate("forgot");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };
  const onSignUpPressed = () => {
    navigation.navigate('signup');
  };
  return (
    <View style={styles.root}>
      <FormContainer>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />

          <CustomInput
            placeholder="Email address"
            value={email}
            setValue={setEmail}
            icon={icon[1]}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            icon={icon[2]}
          />
          {state.errorMessage ?
            <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null
            }
          <CustomButton text="Sign In" onPress={()=>signin({email, password, navigation})} />
          <CustomButton
            text="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type="TERTIALY"
          />
          <CustomButton text="Sign In With Google" onPress={onSignInGoogle} bgColor="#b4814b" fgColor="#fff" />
          <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUpPressed}
            type="TERTIALY"
          />
        </ScrollView>
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 100,
    maxHeight: 200,
    marginBottom: 30,
  },
  root: {
    alignContent: "center",
    padding: 20,
    height: "100%",
    backgroundColor: "#F9FBFC",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
});

export default SignIn;
