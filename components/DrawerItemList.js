import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} 
        activeBackgroundColor={null}
        activeTintColor={null} 
      />
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index;
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              props.navigation.navigate(route.name);
            }}
          >
            <LinearGradient
              colors={isFocused ? ['#ff9ef4', '#e3c2ff'] : ['#ffffff', '#ffffff']}
              style={{
                padding: 15,
                marginVertical: 5,
                marginHorizontal: 20,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: isFocused ? '#ffffff' : '#92969d' }}>
                {props.descriptors[route.key].options.title || route.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
