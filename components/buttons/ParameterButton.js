import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export default function ParameterButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#23262f',
    borderRadius: 10,
  },
  icon: {
    padding: 8,
    color: '#FF4500',
  },
});