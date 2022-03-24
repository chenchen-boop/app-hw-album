import React,{ useState }  from 'react';
import { StyleSheet, StatusBar, SafeAreaView ,Text,View,Pressable} from "react-native";
import Detail from "../json/album_detail.json";
//import react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';




const NewDetail= ()=>{
    var color=333;
    const navigation = useNavigation();
    //const [selected, setSelected] = useState(false);
    return(
        <View style={styles.headerStyle}>
            
            <Text>Newpage</Text>
            <Pressable  onPress={()=>navigation.navigate('Home')}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </Pressable>
             <Pressable onPress={()=>{color?'#7879F1':'#7879F1'}}>
                <Icon name={"bookmark"} color={color} size={18}/>
                <Text>{color}</Text>

            </Pressable> 
            
           {/* <Pressable  
                style={({pressed}) => [
                    {
                        Color: pressed ? 'red' : 'blue',
                    },
                    styles.button,
                    ]}
            >
                 <Icon name={"bookmark"} size={18}/>

                    
            </Pressable>   */}

            
            
                        
            
            
              
        </View>
    
    );

};
const styles = StyleSheet.create({
    headerStyle: {
      
      flexDirection:"row",
      
    },
    textStyle: {
      //fontSize: 20
    },
  });

export default NewDetail;