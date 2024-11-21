import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FontAwwesomeIcon from "react-native-vector-icons/FontAwesome"

import Home from "./screens/Home";
import Profil from "./screens/Profil";
import Login from "./screens/Login";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) =>{
            let iconName;

            if (route.name ==="Login"){
              iconName = "key";
            } else if (route.name === "Profile"){
              iconName= "user";
            } else if (route.name ==="Home"){
              iconName="home";
            }

            return(
              <FontAwwesomeIcon name={iconName} color={color} size={size}/>
            )
          }
        })}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Profile" component={Profil}/>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
      {/* <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profil}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
