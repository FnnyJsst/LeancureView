import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import ProductionView from './screens/ProductionView';
import TestView from './screens/TestView';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#ffff',
            width: 340,
          },
          drawerPosition: 'right',
          drawerActiveTintColor: '#ffffff',
          drawerActiveBackgroundColor: '#ff6600',
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
        }}
        
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={ProductionView} />
        <Drawer.Screen name="Test" component={TestView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});