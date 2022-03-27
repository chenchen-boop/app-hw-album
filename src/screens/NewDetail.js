import React,{ useState }  from 'react';
import { StyleSheet, ScrollView,StatusBar, SafeAreaView ,Text,View,Pressable,FlatList,Image,Button,Linking} from "react-native";
import detail from "../json/album_detail.json";
//import react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import Albumlist from '../components/AlbumDetail';
import PopAlbumDetail from '../components/PopAlbumDetail';


const NewDetail= ()=>{
    // const { title, artist, price, url, image, descriptions, star } = route.params;
    let color='gray';
    const navigation = useNavigation();

    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
  
    //const [selected, setSelected] = useState(false);
    return(
        <View>
            <View style={styles.headerStyle}>
                        
                <Pressable  onPress={()=>navigation.navigate('Home')}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Pressable>
                <Pressable onPress={() => toggleFunction()}>
                    {toggle ? <MaterialCommunityIcons name={'bookmark'} color={'black'} size={26} />:
                                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
                
                </Pressable>

                
                
            </View>
            <View style={styles.contentStyle}> 
                    {/* <FlatList
                        data={sections.data}
                        
                        renderItem={({item}) => (<Text>{item.title}</Text>)}

                        keyExtractor={ item => item.title }

                        // horizontal={true}
                        // showsHorizontalScrollIndicator={false}
                    /> */}
                    <Image 
                        style={styles.imageStyle}
                        source={{uri:detail.data.image}}/>
                    <Text>{detail.data.title}</Text>
                    <Text>{detail.data.artist}</Text>
                    <Text>{detail.data.descriptions}</Text>

                    
            </View>        
                     
                
                
        </View>
                    
           
      
    
    );

};
const styles = StyleSheet.create({
    headerStyle: {
      flexDirection:"row"
    },
    textStyle: {
      //fontSize: 20
    },
    contentStyle:{

    },
    imageStyle: {
        height: 300,
        width: 200,
    }
});

export default NewDetail;