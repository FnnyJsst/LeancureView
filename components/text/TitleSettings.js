import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function TitleSettings({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 45,
    marginTop: 25,
  },
  text: {
    fontSize: 18,
    color: "#ff4500",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
});