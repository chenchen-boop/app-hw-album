import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  NewDetailScreen  from './src/screens/NewDetail';
import HomeScreen from './src/screens/Home';
import MyBooksScreen from './src/screens/MyBooks';
import WishListScreen from './src/screens/WishList';
//import Navigator from './route/homeStack'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack=createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}  />
      <HomeStack.Screen name="Details" component={NewDetailScreen} />
    </HomeStack.Navigator>
  );
}



const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: 'Home' }}
    //     />
    //     <Stack.Screen 
    //       name="NewDetail"
    //       component={NewDetailScreen}
    //       options={{ title: 'detail' }} 
    //     />
    //   </Stack.Navigator>

      
    // </NavigationContainer>

<NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{ title: 'Home' }}
    />
    <Tab.Screen 
      name="MyBooks"
      component={MyBooksScreen}
      options={{ title: 'MyBooks' }} 
    />
    
    <Tab.Screen 
      name=" WishList"
      component={ WishListScreen}
      options={{ title: ' WishList' }} 
    />
    </Tab.Navigator>
</NavigationContainer>

  
  
  

    
  );
}
export default App;