import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainNav from "./src/navigation/MainNav";

const App = () => {
  return (
    <View style={styles.container}>
      <MainNav />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
