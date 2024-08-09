import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button({ title, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
