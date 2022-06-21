import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SplashScreen } from "./views/SplashScreen";

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="SplasScreen"
      component={SplashScreen}
      options={{ title: 'Museum Companion | Welcome', headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes