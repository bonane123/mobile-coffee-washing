import { View, Text } from "react-native";
import React,{ useContext} from "react";
import { Context } from "../context/AuthContext";
import CustomButton from "../components/customButton/CustomButton";

const AccountScreen = ({navigation}) => {
  const {signout} = useContext(Context);
  
  return (
    <View>
      
      <CustomButton text="Logout" onPress={()=>signout({navigation})}/>
    </View>
  );
};

export default AccountScreen;
