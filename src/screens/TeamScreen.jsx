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
          ¡Quieres ganarte todo esto, al igual que yo! Sin tener que invertir ni
          un solo peso, tienes la increíble oportunidad de unirte a mi equipo y
          convertirte en tu propio jefe. Tendrás la libertad de trabajar a tu
          propio ritmo y la posibilidad de alcanzar tus metas más ambiciosas.
          Pero eso no es todo, porque el potencial de ganancias es ilimitado.
          ¿Te imaginas poder lograr todo esto y mucho más?
        </Text>
        <Text style={styles.text}>
          No esperes más, esta es tu oportunidad de tomar el control de tu vida
          y alcanzar el éxito que siempre has deseado. Permíteme guiarte en este
          emocionante camino y compartir contigo todos los conocimientos y
          herramientas que necesitas para triunfar. Estaré a tu disposición para
          responder todas tus preguntas y ayudarte en cada paso del camino.
        </Text>
        <Text style={styles.text}>
          Imagina tener la flexibilidad de administrar tu tiempo como desees,
          sin horarios fijos ni jefes que te digan qué hacer. Tendrás la
          libertad de trabajar desde cualquier lugar, ya sea desde la comodidad
          de tu hogar o mientras disfrutas de unas vacaciones. La decisión es
          tuya.
        </Text>
        <Text style={styles.text}>
          No importa tu experiencia previa o tu formación académica, lo único
          que necesitas es tu determinación y la voluntad de aprender. Te
          proporcionaré todas las herramientas y recursos necesarios para que te
          conviertas en un experto en tu campo y alcances tus objetivos. Juntos,
          construiremos un equipo sólido y exitoso.
        </Text>
        <Text style={styles.text}>
          No dejes que esta oportunidad pase de largo. Contáctame ahora mismo
          para que podamos comenzar este emocionante viaje juntos. No hay
          límites para lo que podemos lograr. ¡El éxito está a tu alcance!
        </Text>
        {/* Otras partes de la pantalla aquí */}
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
});

export default TeamScreen;
