import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GlobalMessage, messageProps } from "./src/features";

export default function App() {
  return (
    <View style={styles.container}>
      <GlobalMessage
        user="Sergio Aguilar"
        message="Hola Bety COmo estas espero te encuentres muy bien XDXDDXDXDXXD el pollo loco esta en oferta XDDDDD"
        date="9:00 PM"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
