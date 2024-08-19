import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TitleSettings from '../components/text/TitleSettings';
import SettingsButton from '../components/buttons/SettingsButton';
import Toggle from '../components/Toggle';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="SETTINGS" 
        onBackPress={() => navigation.navigate('Home')} />
      <View>
        <TitleSettings title="GENERAL" />
        <SettingsButton
          title="Quit app"
          icon={<MaterialIcons name="exit-to-app" size={24} color="black" />}
        />
        <TitleSettings title="CHANNELS MANAGEMENT" />
        <View style={styles.configContainer}>
          <SettingsButton
            title="Channels configuration"
            icon={<Octicons name="tools" size={24} color="black" />}
          />
          <Toggle />
        </View>
        <Text style={styles.text}>Read-only access</Text>
        <View style={styles.configContainer}>
          <SettingsButton
            title="Access to the list of channels from the main interface"
            icon={<FontAwesome5 name="list-alt" size={24} color="black" />}
          />
          <Toggle />
        </View>
        <SettingsButton
          title="Auto-refresh"
          icon={<MaterialCommunityIcons name="reload" size={24} color="black" />}
        />
        <Text style={styles.text}>Never</Text>
        <SettingsButton
          title="View channels list"
          icon={<Ionicons name="list" size={24} />}
        />
        <TitleSettings title="SECURITY" />
        <SettingsButton
          title="Password"
          icon={<Feather name="lock" size={24} />}
        />
        <Text style={styles.text}>No password has been defined</Text>
        <TitleSettings title="INFORMATION" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  text: {
    fontFamily: 'Montserrat-medium',
    paddingLeft: 45,
    marginLeft: 30,
    marginTop: 5,
    fontSize: 14,
    color: "#6E7280",
  },
  configContainer: {
    flexDirection: 'row',
  },
});