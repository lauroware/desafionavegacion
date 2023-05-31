import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";

const DetailsScreen = () => {
  const bread = useSelector((state) => state.products.selected);

  const addToCart = () => {
    // Lógica para agregar el producto al carrito
    // Puedes implementar tu propia lógica aquí
    console.log("Producto agregado al carrito:", bread);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{bread.name}</Text>
      <Text style={styles.description}>{bread.description}</Text>
      <Text style={styles.price}>${bread.price}</Text>
      <Button title="Agregar al carrito" onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default DetailsScreen;
