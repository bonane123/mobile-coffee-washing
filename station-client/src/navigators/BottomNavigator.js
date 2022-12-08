import React from "react";
import AccountScreen from "../screens/AccountScreen";
import StationListScreen from "../screens/stations/StationListScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StationCreateScreen from "../screens/stations/StationCreateScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StationDetailScreen from "../screens/stations/StationDetailScreen";

const ListStack = createNativeStackNavigator();

const StationList = () => {
  return (
    <ListStack.Navigator initialRouteName="list station">
      <ListStack.Screen name="list station" component={StationListScreen}/>
      <ListStack.Screen name="station details" component={StationDetailScreen}/>
    </ListStack.Navigator>
  );
};


// ------------------------------------------------------------------------------------------------
const AccountStack = createNativeStackNavigator();

const AccountInfo = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="account info" component={AccountScreen}/>
    </AccountStack.Navigator>
  );
};


// ------------------------------------------------------------------------------------------------

const CreateStack = createNativeStackNavigator();

const CreateStation = () => {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="create station" component={StationCreateScreen}/>
    </CreateStack.Navigator>
  );
};

// ------------------------------------------------------------------------------------------------


const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <>
    <Tab.Navigator screenOptions={{
      tabBarStyle: { paddingBottom: 6 },
    }} initialRouteName="StationList">
      <Tab.Screen name="StationList" options={ {headerShown: false}} component={StationList} />
      <Tab.Screen name="Create" options={ {headerShown: false}} component={CreateStation} />
      <Tab.Screen name="Account" options={ {headerShown: false}} component={AccountInfo} />
    </Tab.Navigator>
    </>
  );
};

export default BottomNavigator;
