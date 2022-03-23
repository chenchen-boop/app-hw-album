import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  NewDetailScreen  from './src/screens/NewDetail';
import HomeScreen from './src/screens/Home';
//import Navigator from './route/homeStack'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="NewDetail"
          component={NewDetailScreen}
          options={{ title: 'detail' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;