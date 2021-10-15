import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './Screens/MainPage';
import UploadPage from './Screens/UploadPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ title: 'Simply Deliver' }}
          />
          <Stack.Screen
            name="UploadPage"
            component={UploadPage}
            options={{ title: 'Upload Page' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
