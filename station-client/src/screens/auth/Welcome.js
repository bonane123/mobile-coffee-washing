import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useContext, useEffect} from "react";
import Background from "../../components/Background";
import { Context } from "../../context/AuthContext";

const Welcome = ({navigation}) => {
// const {tryLocalSignin} = useContext(Context);
// useEffect(()=>{
//   tryLocalSignin(navigation);
// }, [])


  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>RWANDA COFFEE WASHING SYSTEM</Text>
      </View>
      <TouchableOpacity style={styles.btn_in} onPress={()=>navigation.navigate('signin')}>
        <Text style={styles.in_text}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_up} onPress={()=>navigation.navigate('signup')}>
        <Text style={styles.up_text}>Sign Up</Text>
      </TouchableOpacity>
    </Background>
  );
};

export default Welcome;
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 40, 
        marginVertical: 120,
        paddingHorizontal: 20,
        paddingVertical:10,
        borderRadius: 10,
        // backgroundColor: '#411900',
    },
    title:{
      fontSize: 28,
      color: '#fff',
      fontWeight: 'bold',
    },
    btn_in:{
      backgroundColor: 'white',
      marginHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 8,
      marginVertical: 40
    },
    in_text:{
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
    },
    btn_up:{
      backgroundColor: 'black',
      marginHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 8,
      marginBottom: 40
    },
    
    up_text:{
      color: 'white',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
    },
    

})