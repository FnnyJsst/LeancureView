import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestView = () => {
  return (
    <View style={styles.container}>
      <Text>Test view</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestView;