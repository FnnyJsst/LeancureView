// NoChannelsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoChannelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No channels have been imported, please import channels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
