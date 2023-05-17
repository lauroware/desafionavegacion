import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const RecetasScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/bizcuchuelo.jpg")}
              resizeMode="cover"
            />
            <Text style={styles.imageText}>Torta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/gelatina.jpg")}
              resizeMode="cover"
            />
            <Text style={styles.imageText}>Gelatina</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate("Huevo Frito")}
          >
            <Image
              style={styles.image}
              source={require("../assets/huevo-frito.jpg")}
              resizeMode="cover"
            />
            <Text style={styles.imageText}>Huevo Frito</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/torta-frita.jpg")}
              resizeMode="cover"
            />
            <Text style={styles.imageText}>Torta Frita</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecetasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  imageContainer: {
    width: "48%",
    aspectRatio: 1, // Agregado para hacer que la imagen sea cuadrada
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageText: {
    padding: 10,
    textAlign: "center",
  },
});
