import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Carrito en Construcción!</Text>
      <Text style={styles.subText}>Estamos trabajando en esta función.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#888",
  },
});

export default CartScreen;
