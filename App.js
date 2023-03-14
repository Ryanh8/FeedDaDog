import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import loginscreen from './src/screens/loginscreen';
import homescreen from './src/screens/homescreen';
import { createStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginscreen" component={loginscreen} />
        <Stack.Screen name="homescreen" component={homescreen} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue'
  },
});
