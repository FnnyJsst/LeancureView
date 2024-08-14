import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function SettingsButton({ icon, title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 45,
    marginTop: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    color: "black",
  },
  iconContainer: {
    marginRight: 10,
  },
  text: {
    fontFamily: 'Montserrat-medium',
    fontWeight: 'normal', 
    fontSize: 18,
  },
});