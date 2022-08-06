// import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.newContainer}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  newContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    paddingTop: 100,
    backgroundColor: "#ddd",
  },

  boxOne: {
    backgroundColor: "violet",
    padding: 10,
    flex: 4,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
    flex: 3,
  },
  boxThree: {
    backgroundColor: "red",
    padding: 10,
    flex: 2,
  },
  boxFour: {
    backgroundColor: "orange",
    padding: 10,
    flex: 3,
  },
});
