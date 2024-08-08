import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductionView from '../screens/ProductionView';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffff',
          width: 540,
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
      <Drawer.Screen name="Production view" component={ProductionView} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}