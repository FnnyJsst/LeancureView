import { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import ModalInput from '../inputs/ModalInput';
import Button from '../buttons/Button';
import { useUrls } from '../../context/UrlContext';

export default function ChannelsImport({ visible, onClose }) {
  const [url, setUrl] = useState('');
  const { addUrl } = useUrls();

  const handleOk = () => {
    addUrl(url);
    setUrl('');
    onClose();
  };

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
            <ModalInput value={url} onChangeText={setUrl} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Ok" backgroundColor="#FF4500" color="white" onPress={handleOk} />
            <Button title="Cancel" backgroundColor="#d9d9d9" color="black" onPress={onClose} />
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
    backgroundColor: '#f4f4f4',
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