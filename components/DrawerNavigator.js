import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductionView from '../screens/ProductionView';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffff',
          width: 540,
          marginVertical: 25,
          borderRadius: 10,
        },
        drawerPosition: 'right',
        drawerActiveTintColor: '#92969d',
        drawerActiveBackgroundColor: '#efefef', // Ajout de la transparence
        drawerLabelStyle: {
          fontFamily: 'proximanovaexcn-regular.otf',
        },
        drawerItemStyle: {
          marginHorizontal: 40,
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Production view" component={ProductionView} />
    </Drawer.Navigator>
  );
}