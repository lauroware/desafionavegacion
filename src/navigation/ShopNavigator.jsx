import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductosScreen from "../screens/ProductosScreen";
import IndexScreen from "../screens/IndexScreen";
import RecetasScreen from "../screens/RecetasScreen";
import HuevoFritoScreen from "../screens/HuevoFritoScreen";
import TeamScreen from "../screens/TeamScreen";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Recetas" component={RecetasScreen} />
      <Stack.Screen name="Inicio" component={IndexScreen} />
      <Stack.Screen name="Huevo Frito" component={HuevoFritoScreen} />
      <Stack.Screen name="Productos" component={ProductosScreen} />
      <Stack.Screen name="Team" component={TeamScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
