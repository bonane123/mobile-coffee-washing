import React from "react";
import AccountScreen from "../screens/AccountScreen";
import StationListScreen from "../screens/stations/StationListScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StationCreateScreen from "../screens/stations/StationCreateScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StationDetailScreen from "../screens/stations/StationDetailScreen";
import CreateTrack from "../screens/tracks/CreateTrack";
import { Ionicons,FontAwesome,MaterialIcons } from '@expo/vector-icons';

const ListStack = createNativeStackNavigator();

const StationList = () => {
  return (
    <ListStack.Navigator initialRouteName="Station List">
      <ListStack.Screen name="Station List" options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#411900'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
          headerTitleAlign: 'center'
        }} component={StationListScreen} />
      <ListStack.Screen
        name="Station Details"
        options={{
          title: 'Station Details',
          headerStyle: {
            backgroundColor: '#411900'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
        component={StationDetailScreen}
        
      />
    </ListStack.Navigator>
  );
};

// ------------------------------------------------------------------------------------------------
const AccountStack = createNativeStackNavigator();

const AccountInfo = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account Settings" options={{
          title: 'Account Settings',
          headerStyle: {
            backgroundColor: '#411900'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
          headerTitleAlign: 'center'
        }}  component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

// ------------------------------------------------------------------------------------------------

const CreateStack = createNativeStackNavigator();

const CreateStation = () => {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen
        name="Create Station"
        options={{
          title: 'Create Station',
          headerStyle: {
            backgroundColor: '#411900'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
          headerTitleAlign: 'center'
        }} 
        component={StationCreateScreen}
      />
    </CreateStack.Navigator>
  );
};

const CreateTrackStack = createNativeStackNavigator();

const CreateTrackStation = () => {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="Create Track"
      options={{
        title: 'Track Station',
        headerStyle: {
          backgroundColor: '#411900'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',

        },
        headerTitleAlign: 'center'
      }}  component={CreateTrack} />
    </CreateStack.Navigator>
  );
};

// ------------------------------------------------------------------------------------------------

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <>
      <Tab.Navigator
      
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#411900', paddingBottom: 10, height: 60, paddingTop: 10},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#a9a9a9',
          tabBarHideOnKeyboard: true, 
        }}
        initialRouteName="List"
      >
        <Tab.Screen
          name="List"
          options={{ headerShown: false,tabBarIcon:({color})=>(
            <Ionicons name="list-circle" size={24} color={color} />
          ) }}
          component={StationList}
        />
        <Tab.Screen
          name="Station"
          options={{ headerShown: false,
          tabBarIcon:({color})=>(
            <FontAwesome name="coffee" size={24} color={color} />
          ) }}
          component={CreateStation}
        />
        <Tab.Screen
          name="Track"
          options={{ headerShown: false, tabBarIcon:({color})=>(
            <MaterialIcons name="assistant-navigation" size={24} color={color} />
          ) }}
          component={CreateTrackStation}
        />
        <Tab.Screen
          name="Account"
          options={{ headerShown: false, tabBarIcon:({color})=>(
            <MaterialIcons name="account-circle" size={24} color={color} />
          ) }}
          component={AccountInfo}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigator;
