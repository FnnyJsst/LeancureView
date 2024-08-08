import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Channels Management</Text>
      </View>
      <DrawerItemList {...props} />
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
    fontFamily: 'HelveticaNeueHeavy.otf',
    fontWeight: 'bold',
  },
});