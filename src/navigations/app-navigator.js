import React, {PureComponent} from 'react';
import Home from '_scenes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function AppStack() {
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>;
}
export default AppStack;