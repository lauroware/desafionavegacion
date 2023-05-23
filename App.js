import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ShopNavigator from "./src/navigation/ShopNavigator";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default function App() {
  const [isPortrait, setIsPortrait] = useState(true);

  const statePortrait = () => setIsPortrait(onPortrait);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height > dim.width;
  };

  console.log(isPortrait);

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    return () => {
      Dimensions.removeEventListener("change", statePortrait);
    };
  }, []);

  const [loaded] = useFonts({
    OpenSansBold: require("./src/assets/fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./src/assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Header />
      <ShopNavigator />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  texto: {
    fontFamily: "OpenSansBold",
  },
  texto2: {
    fontFamily: "OpenSansRegular",
  },
});
