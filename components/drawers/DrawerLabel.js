import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const DrawerLabel = ({ label, iconName, iconColor, iconSize, onMoveUp, onMoveDown, onEdit, onDelete }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    {label !== "No Channel" && (
      <>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={onMoveUp}>
            <AntDesign name="up" size={20} color="black" style={styles.up} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onMoveDown}>
            <AntDesign name="down" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={onEdit}>
            <EvilIcons name="pencil" size={25} color="black" style={styles.pencil}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Ionicons name="trash-outline" size={20} color="black" />
          </TouchableOpacity>
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
    marginRight: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  pencil: {
    marginRight: 10,
  },
});

export default DrawerLabel;