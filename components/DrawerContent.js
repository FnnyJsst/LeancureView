import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useFonts } from 'expo-font';
import ChannelsImport from './modals/ChannelsImport';

export default function DrawerContent(props) {
  const [isModalVisible, setModalVisible] = useState(false);

  const [fontsLoaded, error] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#0000ff" />;  // You can customize this to your needs
  }

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="arrow-back" size={20} style={styles.leftArrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>CHANNELS MANAGEMENT</Text>
        <TouchableOpacity onPress={openModal}>
          <Feather name="download" size={20} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log('+ pressed')}>
            <Entypo name="add-to-list" size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <DrawerItemList {...props} />
      <ChannelsImport visible={isModalVisible} onClose={closeModal} />
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