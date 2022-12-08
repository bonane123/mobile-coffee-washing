import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import stationAPI from "../api/station";
import { navigate } from "../navigationRef";
// import { useNavigation } from "@react-navigation/native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await stationAPI.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ token: "signup", payload: response.data.token });
      console.log(response.data.token);
      
      navigate('Stations');
    } catch (err) {
      dispatch({ type: "add_error", payload: err.message });
    }
  };
const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in with email and password
    // Handle success by updating our state
    // Handle failure by showing the error message
  };
};
const signout = (dispatch) => {
  return () => {
    //    Somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { token: null, errorMessage: "" }
);
