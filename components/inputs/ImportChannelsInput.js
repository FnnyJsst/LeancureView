import { TextInput, StyleSheet } from "react-native";

export default function ImportChannelsInput() {
  return (
    <TextInput
    style={styles.input}
    placeholder="Paste your channels here"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "85%",
    borderColor: '#cecdcd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: "#cecdcd"
  },
});