import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import ChannelsImport from './modals/ChannelsImport';

export default function DrawerContent(props) {

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Channels Management</Text>
        <TouchableOpacity onPress={openModal}>
            <Fontisto name="import" size={20} style={styles.icon} />
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
  headerContainer: {
    height: 75,
    marginLeft: 25,
    marginTop: -15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    marginLeft: 15,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  icon: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
});