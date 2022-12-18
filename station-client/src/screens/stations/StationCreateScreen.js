import { StyleSheet, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../components/customInput/CustomInput";
import FormContainer from "../../components/FormContainer";
import CustomButton from "../../components/customButton/CustomButton";

import axiosInstance from "../../api/station";
import { useStation } from "../../hooks/useStation";


const StationCreateScreen = ({ navigation }) => {

  const {dispatch } = useStation();
  const [title, setTitle] = useState("");
  const [coffee, setCoffee] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  
  const createStation = async()=>{
    setLoading(true);
    try {
      const response = await axiosInstance.post('/stations',{
        title, coffee, location, quantity, photo
      })
      const json = await response.data;
      setTitle('')
      setCoffee('')
      setLocation('')
      setQuantity('')
      setPhoto('')
      setLoading(false);
      if(json){
        dispatch({type: "ADD_STATION", payload: json})

        navigation.navigate('Station List');
      }
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      
    }
    
  }

  return (
    <View style={styles.root}>
      <FormContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomInput
            placeholder="Station Name..."
            value={title}
            setValue={setTitle}
          />
          <CustomInput
            placeholder="Type of Coffee..."
            value={coffee}
            setValue={setCoffee}
          />
          <CustomInput
            placeholder="Coffee Quantity..."
            value={quantity}
            setValue={setQuantity}
          />
          <CustomInput
            placeholder="Station Location..."
            value={location}
            setValue={setLocation}
          />
          <CustomInput
            placeholder="Station Image URL..."
            value={photo}
            setValue={setPhoto}
          />
          

          {!loading && <CustomButton text="Create Station" onPress={()=> createStation({title, coffee, quantity,location,navigation })} />}
          {loading && <CustomButton text="Sending..." />}
          <Text style={styles.text}>
            What is coffee? Coffee is a beverage brewed from the roasted and
            ground seeds of the tropical evergreen coffee plant. Coffee is one
            of the three most popular beverages in the world (alongside water
            and tea), and it is one of the most profitable international
            commodities
          </Text>
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

  text: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20
  },
  link: {
    color: "#411900",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
});

export default StationCreateScreen;
