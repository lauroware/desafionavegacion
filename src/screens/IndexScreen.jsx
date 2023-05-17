import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const IndexScreen = ({ navigation }) => {
  const navigateToBread = () => {
    navigation.navigate("Recetas");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://api.whatsapp.com/send?phone=00541162366175"); // Reemplaza "xxxxxxxxxx" con el número de teléfono deseado
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImagesContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/foto1.jpg")} />
          <Text style={styles.imageText}>Productos</Text>
        </View>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={navigateToBread}
        >
          <Image style={styles.image} source={require("../assets/foto2.jpg")} />
          <Text style={styles.imageText}>Recetas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomImagesContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/foto3.jpg")} />
          <Text style={styles.imageText}>Comunidad</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/foto4.jpg")} />
          <Text style={styles.imageText}>Unite a mi equipo</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.iconContainer} onPress={openWhatsApp}>
        <Icon name="whatsapp" size={35} color="#25D366" />
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  topImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bottomImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "48%",
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  imageText: {
    padding: 10,
    textAlign: "center",
  },
  iconContainer: {
    marginBottom: 20,
  },
});
