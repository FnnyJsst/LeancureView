import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { useUrls } from '../../context/UrlContext';
import WebViewScreen from '../../screens/WebViewScreen'; 
import NoChannelScreen from '../../screens/NoChannelScreen';
import DrawerLabel from './DrawerLabel'; 

const Drawer = createDrawerNavigator();

export const getDrawerScreens = (urls, onMoveUp, onMoveDown, onDelete) => {
  if (urls.length > 0) {
    return urls.map((url, index) => ({
      name: `WebView ${index + 1}`,
      component: WebViewScreen,
      initialParams: { url },
      options: {
        drawerLabel: ({ color, size }) => (
          <DrawerLabel 
            label={`WebView ${index + 1}`} 
            iconName="chrome" 
            iconColor={color} 
            iconSize={size} 
            onMoveUp={() => onMoveUp(index)}
            onMoveDown={() => onMoveDown(index)}
            onDelete={() => onDelete(index)}
          />
        ),
      },
    }));
  } else {
    return [{
      name: "No Channel",
      component: NoChannelScreen,
      options: {
        drawerLabel: ({ color, size }) => (
          <DrawerLabel 
            label="No Channel" 
            iconName="exclamationcircleo" 
            iconColor={color} 
            iconSize={size} 
          />
        ),
      },
    }];
  }
};

export default function DrawerNavigator() {
  const { urls } = useUrls();
  const [screensOrder, setScreensOrder] = useState(urls);

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newOrder = [...screensOrder];
      const [movedScreen] = newOrder.splice(index, 1);
      newOrder.unshift(movedScreen);
      setScreensOrder(newOrder);
    }
  };

  const handleMoveDown = (index) => {
    if (index < screensOrder.length - 1) {
      const newOrder = [...screensOrder];
      const [movedScreen] = newOrder.splice(index, 1);
      newOrder.splice(index + 1, 0, movedScreen);
      setScreensOrder(newOrder);
    }
  };

  const handleDelete = (index) => {
    const newOrder = screensOrder.filter((_, i) => i !== index);
    setScreensOrder(newOrder);
  };

  const screens = getDrawerScreens(screensOrder, handleMoveUp, handleMoveDown, handleDelete);

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
      {screens.map((screen, index) => (
        <Drawer.Screen 
          key={index}
          name={screen.name}
          component={screen.component}
          initialParams={screen.initialParams}
          options={screen.options}
        />
      ))}
    </Drawer.Navigator>
  );
}