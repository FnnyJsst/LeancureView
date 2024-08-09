import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import ImportChannelsInput from '../inputs/ImportChannelsInput';
import Button from '../buttons/Button';

export default function ChannelsImport({ visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Import Channels</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>URL</Text>
            <ImportChannelsInput />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Ok" backgroundColor="#FF6600" color="white" borderColor="#FF6600"/>
            <Button title="Cancel" backgroundColor="white" color="#cecdcd" borderColor="#cecdcd" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 8,
    marginLeft: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
