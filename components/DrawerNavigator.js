import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductionView from '../screens/ProductionView';
import DrawerContent from './DrawerContent';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useUrls } from '../context/UrlContext';
import WebViewScreen from '../screens/WebViewScreen'; 
import ScreenSaver from '../screens/ScreenSaver';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { urls } = useUrls();

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
        drawerLabelStyle: {},
        drawerItemStyle: {
          marginHorizontal: 40,
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen 
        name="Home" 
        component={ScreenSaver}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="up" size={size} color={color} />
          ),
        }}
      />
      {urls.map((url, index) => (
        <Drawer.Screen 
          key={index}
          name={`WebView ${index + 1}`} 
          component={WebViewScreen}
          initialParams={{ url }} 
          options={{
            drawerIcon: ({ color, size }) => (
              <AntDesign name="earth" size={size} color={color} />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}