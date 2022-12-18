import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Image, StatusBar } from "react-native";
import { StationProvider } from "./src/context/StationContext";

const App = () => {

  return (
    <StationProvider>
    <LocationProvider>
      <AuthProvider>
      <StatusBar
        animated={true}
        backgroundColor="#411900"
         />
        <NavigationContainer
          ref={() => setNavigator()}
        >
          <AuthNavigator />
        </NavigationContainer>
      </AuthProvider>
    </LocationProvider>
    </StationProvider>
  );
};

export default App;
