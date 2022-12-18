
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ConfirmEmail from "../screens/auth/ConfirmEmail";
import ForgotPassword from "../screens/auth/ForgotPassword";
import NewPassword from "../screens/auth/NewPassword";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import Welcome from "../screens/auth/Welcome";
import ResolveScreen from "../screens/auth/ResolveScreen";
// import StationDetailScreen from "../screens/stations/StationDetailScreen";
import BottomNavigator from "./BottomNavigator";

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {

  return (
    <AuthStack.Navigator initialRouteName="resolve" 
   
    >
      <AuthStack.Screen name="welcome" options={ {headerShown: false}} component={Welcome} />
      <AuthStack.Screen name="resolve" options={ {headerShown: false}} component={ResolveScreen} />
      <AuthStack.Screen name="signin" component={SignIn} />
      <AuthStack.Screen name="signup" component={SignUp} />
      <AuthStack.Screen name="confirm" component={ConfirmEmail} />
      <AuthStack.Screen name="forgot" component={ForgotPassword} />
      <AuthStack.Screen name="newpassword" component={NewPassword} />
      <AuthStack.Screen name="Stations" options={ {headerShown: false}} component={BottomNavigator} />
    </AuthStack.Navigator>
  );
}
export default AuthNavigator;
