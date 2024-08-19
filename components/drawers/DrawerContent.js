import { useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import ChannelsImport from '../modals/ChannelsImport';
import AddChannels from '../modals/AddChannels';
import Header from '../Header'; 

export default function DrawerContent(props) {
  const [isImportModalVisible, setImportModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const [fontsLoaded, error] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
  });

  const openImportModal = () => {
    setImportModalVisible(true);
  };
  const closeImportModal = () => {
    setImportModalVisible(false);
  };

  const openAddModal = () => {
    setAddModalVisible(true);
  };
  const closeAddModal = () => {
    setAddModalVisible(false);
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#0000ff" />; 
  }

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <Header 
        title="CHANNELS MANAGEMENT" 
        onBackPress={() => props.navigation.closeDrawer()} 
        onImportPress={openImportModal} 
        onAddPress={openAddModal} 
        showIcons={true} // Afficher les icônes
      />
      <DrawerItemList {...props} />
      <ChannelsImport visible={isImportModalVisible} onClose={closeImportModal} />
      <AddChannels visible={isAddModalVisible} onClose={closeAddModal} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    paddingTop: 25,
  },
});