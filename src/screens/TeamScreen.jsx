import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const TeamScreen = ({ navigation }) => {
  const handlePress = () => {
    // Navegar a otra pantalla
    navigation.navigate("Team");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.title}>
          ¡Unite a la revolución culinaria con Essen y convertite en nuestro
          próximo revendedor estrella!
        </Text>

        <Text style={styles.text}>
          ¿Sos un apasionado de la cocina y te encanta compartir tu entusiasmo
          con los demás? ¿Te gustaría tener tu propio negocio y ser parte de una
          marca reconocida a nivel internacional? ¡Entonces esta es tu
          oportunidad!
        </Text>

        <Text style={styles.text}>
          En Essen, buscamos personas como tú, emprendedores con visión y pasión
          por la cocina, para formar parte de nuestro equipo de revendedores.
          ¿Qué te ofrecemos? Una increíble gama de productos culinarios de alta
          calidad que harán que tus clientes se enamoren de la cocina como nunca
          antes.
        </Text>

        <Text style={styles.text}>
          Imagina tener acceso a una exclusiva selección de utensilios de cocina
          que combinan tecnología de vanguardia, diseño innovador y durabilidad
          excepcional. Desde nuestras sartenes antiadherentes que hacen que
          cocinar sea un verdadero placer, hasta nuestros cuchillos de precisión
          que facilitan el corte y el picado, cada producto Essen está diseñado
          para superar las expectativas.
        </Text>

        <Text style={styles.text}>
          Pero eso no es todo. Al convertirte en revendedor Essen, vas a recibir
          capacitación y apoyo continuo para ayudarte a alcanzar el éxito. Te
          proporcionaremos todas las herramientas y recursos necesarios para que
          puedas ofrecer a tus clientes una experiencia excepcional y construir
          tu propio negocio próspero.
        </Text>

        <Text style={styles.text}>
          No pierdas la oportunidad de formar parte de una marca líder en la
          industria culinaria y de llevar la magia de Essen a tu comunidad.
          ¡Contáctanos ahora y descubre cómo puedes comenzar tu camino hacia el
          éxito como revendedor Essen!
        </Text>

        <Text style={styles.text}>
          ¡El futuro culinario está en tus manos! Comunícate con nosotros hoy
          mismo y sé parte de la revolución Essen.
        </Text>

        <Text style={styles.text}>Contactame, soy Martín, Tu Chico Essen</Text>

        <Text style={styles.text}></Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  contact: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default TeamScreen;
