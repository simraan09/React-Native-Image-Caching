import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import ImageCaching from "./ImageCaching";

const App = () => {
  const IMAGE_URI =
    "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageCaching styles={styles} uri={IMAGE_URI} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
  message: {
    fontSize: 20,
    color: "#4169e1",
    fontWeight: "800",
    textAlign: "center",
  },
});

export default App;
