import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "../screens/IndexScreen";
import RecetasScreen from "../screens/RecetasScreen";
import HuevoFritoScreen from "../screens/HuevoFritoScreen";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Recetas" component={RecetasScreen} />
        <Stack.Screen name="Inicio" component={IndexScreen} />
        <Stack.Screen name="Huevo Frito" component={HuevoFritoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
