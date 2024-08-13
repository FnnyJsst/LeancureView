import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useFonts } from 'expo-font';
import ChannelsImport from '../modals/ChannelsImport';
import AddChannels from '../modals/AddChannels';

export default function DrawerContent(props) {
  const [isImportModalVisible, setImportModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const [fontsLoaded, error] = useFonts({
    'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
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
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="arrow-back" size={20} style={styles.leftArrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>CHANNELS MANAGEMENT</Text>
        <TouchableOpacity onPress={openImportModal}>
          <Feather name="download" size={20} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={openAddModal}>
            <Entypo name="add-to-list" size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
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
  headerContainer: {
    height: 75,
    marginVertical: 25,
    marginHorizontal: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#23262f',
    borderRadius: 5,
  },
  leftArrowIcon: {
    marginLeft: 10,
    color: '#fff',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 15,
    fontFamily: 'Montserrat',
    color: "#fff",
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 25,
  },
  icon: {
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});