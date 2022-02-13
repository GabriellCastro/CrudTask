import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Task from './src/pages/Task';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen
          name='Task'
          component={Task}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
