import React, { PureComponent } from 'react'
import AppStack from "./app-navigator";
import { NavigationContainer } from '@react-navigation/native';
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <AppStack />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;