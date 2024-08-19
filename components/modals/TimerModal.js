import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../buttons/Button';

const TimerModal = ({ visible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>AUTO-RELOAD VIEW</Text>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={styles.radioContainer}
              onPress={() => setSelectedOption(option.value)}
            >
              <View style={styles.radioCircle}>
                {selectedOption === option.value && <View style={styles.selectedRb} />}
              </View>
              <Text style={styles.radioText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
          <Button title="Close" backgroundColor="#FF4500" color="white" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: "30%",
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  radioText: {
    fontSize: 16,
  },
});

export default TimerModal;