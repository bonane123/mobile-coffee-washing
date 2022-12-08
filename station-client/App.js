import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";


const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={()=>setNavigator()}>
        <AuthNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
