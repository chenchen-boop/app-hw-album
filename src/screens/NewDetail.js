import React,{ useState }  from 'react';
import { StyleSheet, StatusBar, SafeAreaView ,Text,View,Pressable} from "react-native";
import Detail from "../json/album_detail.json";
//import react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


const NewDetail= ()=>{
    let color='gray';
    const navigation = useNavigation();

    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
  
    //const [selected, setSelected] = useState(false);
    return(
        <View style={styles.headerStyle}>
            
            <Text>Newpage</Text>
            <Pressable  onPress={()=>navigation.navigate('Home')}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => toggleFunction()}>
                {toggle ? <MaterialCommunityIcons name={'bookmark'} color={'black'} size={26} />:
                            <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
            
            </Pressable>






             {/* <Pressable onPress={()=>{  if(color=='gray')color='#7879F1';
                                        else color='gray'
                                    }
                                }>
                <Icon name={"bookmark"} color={color} size={18}/>
                <Text>{color}</Text>

            </Pressable>  */}
            
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