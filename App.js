import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import HomeScreen from './screens/HomeScreen';
import MainScreen from './Screens/MainScreen';
import DetailsScreen from './Screens/DetailsScreen';
import ResultScreen from './Screens/ResultScreen';

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
        <Drawer.Screen name="ResultScreen" component={ResultScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;