import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductionView from '../screens/ProductionView';
import DrawerContent from './DrawerContent';
import AntDesign from '@expo/vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffff',
          width: '100%',
          borderRadius: 10,
        },
        drawerPosition: 'right',
        drawerActiveTintColor: '#92969d',
        drawerActiveBackgroundColor: '#f4f4f4', 
        drawerLabelStyle: {
        },
        drawerItemStyle: {
          marginHorizontal: 40,
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen 
        name="Production view" 
        component={ProductionView}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="up" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}