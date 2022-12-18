import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import stationAPI from "../api/station";
import { navigate } from "../navigationRef";
// import { useNavigation } from "@react-navigation/native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { errorMessage: "", token: null };

    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async(navigation)=> {
  const token = await AsyncStorage.getItem('token');
  // console.log(token);
  
  if (token){
    dispatch({type: 'signin', payload: token})
    navigation.navigate("Stations");
  }else{

    navigation.navigate('welcome');
  }
  
};

const signup =
  (dispatch) =>
  async ({ email, password, navigation }) => {
    try {
      const response = await stationAPI.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ token: "sign_in", payload: response.data.token });

      if (response.data.token) {
        navigation.navigate("Stations");
      }
      console.log(response.data.token);
    } catch (err) {
      dispatch({ type: "add_error", payload: err.message });
    }
  };
const signin = (dispatch) => {
  return async ({ email, password, navigation }) => {
    try {
      const response = await stationAPI.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      if (response.data.token) {
        navigation.navigate("Stations");
      }
      // console.log(response.data.token);
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};
const signout = (dispatch) => async({navigation}) => {
   const token = await AsyncStorage.removeItem('token');
    dispatch({ type: "signout"});
    if(!token){

      navigation.navigate("welcome");
    }
  };


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, tryLocalSignin },
  { token: null, errorMessage: "" }
);
