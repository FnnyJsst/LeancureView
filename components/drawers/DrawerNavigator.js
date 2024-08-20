import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { useUrls } from '../../context/UrlContext';
import WebViewScreen from '../../screens/WebViewScreen'; 
import NoChannelScreen from '../../screens/NoChannelScreen';
import DrawerLabel from './DrawerLabel'; 

const Drawer = createDrawerNavigator();

export const getDrawerScreens = (urls) => {
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
  const screens = getDrawerScreens(urls);

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