import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  NewDetailScreen  from './src/screens/NewDetail';
import HomeScreen from './src/screens/Home';
import MyBooksScreen from './src/screens/MyBooks';
import WishListScreen from './src/screens/WishList';
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import Navigator from './route/homeStack'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack=createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" 
                        component={HomeScreen} 
                        options={{
                            headerShown: false } 
                            }/>
      <HomeStack.Screen name="Details" 
                        component={NewDetailScreen} 
                        options={{
                                headerShown: false,}
                                }/>
    </HomeStack.Navigator>
  );
}




const App = () => {
  return (

<NavigationContainer>
    <Tab.Navigator>



    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{  title: 'Home' ,
                  tabBarIcon: ({size='18', color='333'}) => (<Icon name={"home"} color={color} size={size}/>),
                  headerShown: false}}
    />
    <Tab.Screen 
      name="MyBooks"
      component={MyBooksScreen}
      options={{ title: 'MyBooks' ,
                tabBarIcon: ({size='18', color='333'}) => (<Icon name={"bookmark"} color={color} size={size}/>)}} 
    />
    
    <Tab.Screen 
      name=" WishList"
      component={ WishListScreen}
      options={{ title: ' WishList' , 
                 tabBarIcon: ({size='18', color='333'}) => (<MaterialCommunityIcons name={"book-open"} color={color} size={size}/>)}}  
    />
    </Tab.Navigator>
</NavigationContainer>

  
  
  

    
  );
}
export default App;