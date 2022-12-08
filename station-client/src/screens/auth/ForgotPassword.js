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
  import { MaterialIcons } from "@expo/vector-icons";

  const icon = [
    <MaterialIcons name="account-circle" size={24} color="black" />,
    <MaterialIcons name="email" size={24} color="black" />,
  ];
  
  const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState("");
  
    const onSendPressed = () => {
      navigation.navigate('newpassword');
    };
  
    const onSignInPressed = () => {
      navigation.navigate('signin');
    };
    return (
      <View style={styles.root}>
        <FormContainer>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Reset your password</Text>
  
            <CustomInput
            placeholder="Email address"
            value={email} 
            setValue={setEmail}
            icon={icon[1]}
          />
            <CustomButton text="Send" onPress={onSendPressed} />
           
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
  
  export default ForgotPassword;
  