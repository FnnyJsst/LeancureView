import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const DrawerLabel = ({ label, iconName, iconColor, iconSize }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    {label !== "No Channel" && (
      <>
        <View style={styles.arrowContainer}>
          <AntDesign name="up" size={20} color="black" style={styles.up} />
          <AntDesign name="down" size={20} color="black" />
        </View>
        <View style={styles.iconsContainer}>
          <EvilIcons name="pencil" size={25} color="black" style={styles.pencil}/>
          <Ionicons name="trash-outline" size={20} color="black" />
        </View>
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 15, 
    color: 'black',
    fontSize: 18,
  },
  arrowContainer: {
    flexDirection: 'row',
    marginLeft: 'auto', 
  },
  up: {
    marginRight: 8, 
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: '10%', 
  },
  pencil: {
    marginRight: 8, 
  },
  icon: {
    marginLeft: 5, 
  },
});

export default DrawerLabel;