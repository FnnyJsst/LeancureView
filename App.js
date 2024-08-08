import React, { useState, useEffect} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductionView from './screens/ProductionView';
import TestView from './screens/TestView';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require('./assets/images/screensaver_anim.png')} style={styles.splashImage} />
      </View>
    );
  }

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
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 500,
    height: 230,
  },
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