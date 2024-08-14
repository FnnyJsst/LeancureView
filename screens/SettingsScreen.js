import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Header from '../components/Header';
import TitleSettings from '../components/text/TitleSettings';
import SettingsButton from '../components/buttons/SettingsButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function SettingsScreen() {
  return (
    <View>
      <Header
        title="SETTINGS">
      </Header>

      <View>
        <TitleSettings 
          title="GENERAL" />
        <SettingsButton 
          title = "Quit app"
          icon={<MaterialIcons name="exit-to-app" size={24} color="black" />} />
        <TitleSettings 
          title="CHANNELS MANAGEMENT" />
        <SettingsButton 
          title = "Channels configuration"
          icon={<Octicons name="tools" size={24} color="black" />} />
        <Text style={styles.text}>Read-only access</Text>
        <SettingsButton 
          title = "Access to the list of channels from the main interface"
          icon={<FontAwesome5 name="list-alt" size={24} color="black" />} />
        <SettingsButton 
          title = "Auto-refresh"
          icon={<MaterialCommunityIcons name="reload" size={24} color="black" />} />
          <Text style={styles.text}>Never</Text>
        <SettingsButton 
          title = "View channels list"
          icon={<Ionicons name="list" size={24} />} />
        <TitleSettings 
          title="SECURITY" />
        <SettingsButton 
          title = "Password"
          icon={<Feather name="lock" size={24} />} />
        <Text style={styles.text}>No password has been defined</Text>
        <TitleSettings 
          title="INFORMATION" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-medium',
    paddingLeft: 45,
    marginLeft: 30,
    marginTop: 5,
    fontSize: 14,
    color: "#6E7280",
  },
});