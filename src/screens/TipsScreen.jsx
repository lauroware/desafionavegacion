import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TipsScreen = ({ navigation }) => {
  // Esta función maneja el evento de prensa en la tarjeta
  const handlePress = () => {
    // Aquí deberías definir la navegación a otra pantalla, como "DetallesTipScreen"
    // Por ejemplo: navigation.navigate("DetallesTip");
    // Asegúrate de tener una pantalla llamada "DetallesTip" en tu enrutador o stack de navegación
  };

  // Lista de tips de cocina
  const cookingTips = [
    {
      id: 1,
      title: "Técnica de cortar",
      description:
        "Aprende cómo cortar ingredientes de manera correcta para obtener resultados uniformes en tus platos.",
    },
    {
      id: 2,
      title: "Consejos para seleccionar frutas",
      description:
        "Descubre cómo elegir frutas frescas y en su punto óptimo de madurez para aprovechar al máximo su sabor.",
    },
    {
      id: 3,
      title: "Sustituciones de ingredientes",
      description:
        "Proporciona alternativas y sustituciones de ingredientes comunes en caso de alergias alimentarias, preferencias dietéticas o ingredientes faltantes. Por ejemplo, cómo reemplazar los huevos en una receta vegana o cómo sustituir la harina de trigo por harina sin gluten.",
    },
    {
      id: 4,
      title: "Tiempo de cocción y temperaturas",
      description:
        "Ofrece recomendaciones sobre tiempos de cocción y temperaturas para diferentes alimentos, como carnes, aves, pescados y vegetales. Esto ayudará a los usuarios a cocinar los alimentos de manera segura y lograr la textura y jugosidad adecuadas.",
    },
    {
      id: 5,
      title: "Consejos de organización y planificación",
      description:
        "Ofrece consejos para organizar y planificar las comidas, como técnicas de preparación anticipada, almacenamiento adecuado de alimentos y sugerencias para aprovechar al máximo los ingredientes.",
    },
    {
      id: 6,
      title: "Trucos para ahorrar tiempo",
      description:
        "Descubre cómo elegir frutas frescas y en su punto óptimo de madurez para aprovechar al máximo su sabor.",
    },
    {
      id: 7,
      title: "Consejos de presentación y decoración",
      description:
        "Brinda ideas y técnicas para presentar y decorar los platos de manera atractiva, incluyendo consejos sobre emplatado, uso de ingredientes decorativos y combinación de colores y texturas.",
    },
    {
      id: 8,
      title: "Consejos de seguridad alimentaria",
      description:
        "Educa a los usuarios sobre prácticas seguras de manipulación de alimentos, almacenamiento adecuado, prevención de contaminación cruzada y técnicas de descongelación y calentamiento seguro.",
    },

    {
      id: 9,
      title: "Consejos para evitar desperdicios",
      description:
        "Ofrece recomendaciones sobre cómo evitar desperdiciar alimentos, cómo aprovechar sobras de manera creativa y cómo almacenar y conservar los alimentos adecuadamente para prolongar su vida útil.",
    },
    {
      id: 10,
      title: "Información nutricional",
      description:
        "Proporciona información sobre el valor nutricional de los ingredientes y consejos para una alimentación equilibrada y saludable.",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {cookingTips.map((tip) => (
        <View style={styles.card} key={tip.id} onPress={handlePress}>
          <Text style={styles.title}>{tip.title}</Text>
          <Text style={styles.description}>{tip.description}</Text>
        </View>
      ))}
      <Text style={styles.text}></Text>
      <Text style={styles.text}></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#888",
  },
});

export default TipsScreen;
