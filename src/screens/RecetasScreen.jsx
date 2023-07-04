import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const RecetasScreen = ({ navigation }) => {
  const [filtro, setFiltro] = useState(null);

  const data = [
    {
      id: "1",
      title: "Torta",
      image: require("../assets/bizcuchuelo.jpg"),
      type: "Dulce",
    },
    {
      id: "2",
      title: "Gelatina",
      image: require("../assets/gelatina.jpg"),
      type: "Dulce",
    },
    {
      id: "3",
      title: "Huevo Frito",
      image: require("../assets/huevo-frito.jpg"),
      type: "Salado",
    },
    {
      id: "4",
      title: "Torta Frita",
      image: require("../assets/torta-frita.jpg"),
      type: "Frito",
    },
    {
      id: "5",
      title: "Chipa",
      image: require("../assets/chipa.jpg"),
      type: "Salado",
    },
    {
      id: "6",
      title: "Panchos",
      image: require("../assets/pancho.jpg"),
      type: "Salado",
    },
    {
      id: "7",
      title: "Chocotorta",
      image: require("../assets/chocotorta.jpg"),
      type: "Dulce",
    },
    {
      id: "8",
      title: "Arroz",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
    },
  ];

  const Card = ({ title, image, type }) => {
    return (
      <TouchableOpacity style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <Text style={styles.imageText}>{title}</Text>
        <Text style={styles.imageType}>{type}</Text>
      </TouchableOpacity>
    );
  };

  const handleFilter = (type) => {
    setFiltro(type);
  };

  const filteredData = filtro
    ? data.filter((item) => item.type === filtro)
    : data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Recetas</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filtro:</Text>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === null && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter(null)}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === null && styles.filterButtonTextActive,
            ]}
          >
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Dulce" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Dulce")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Dulce" && styles.filterButtonTextActive,
            ]}
          >
            Dulces
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Salado" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Salado")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Salado" && styles.filterButtonTextActive,
            ]}
          >
            Salados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Frito" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Frito")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Frito" && styles.filterButtonTextActive,
            ]}
          >
            Fritos
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.body}>
          {filteredData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              type={item.type}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  filterTitle: {
    marginRight: 10,
    fontWeight: "bold",
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 10,
  },
  filterButtonText: {
    fontWeight: "bold",
  },
  filterButtonActive: {
    backgroundColor: "orange",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
  body: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "orange",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: "100%",
    resizeMode: "cover",
  },
  imageText: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageType: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default RecetasScreen;
