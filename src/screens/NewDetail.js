import React,{ useState }  from 'react';
import { StyleSheet, ScrollView,StatusBar, SafeAreaView ,Text,View,Pressable,FlatList,Image,Button,Linking,Alert} from "react-native";
import detail from "../json/album_detail.json";
//import react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import Albumlist from '../components/AlbumDetail';
import PopAlbumDetail from '../components/PopAlbumDetail';
import CreateStar from '../components/CreateStar';
import { FontAwesome5 } from '@expo/vector-icons'; 

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
                    {toggle ? <Ionicons style={styles.bookmarkStyle} name="bookmark" size={26} color="gray" /> :
                              <Ionicons name="bookmark" size={26} color="#6200EE" />}
                
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
                    <Text style={styles.titletextStyle}>{detail.data.title}</Text>
                    <Text style={styles.authortextStyle}>{detail.data.artist}</Text>
                    <View style={styles.StarbarStyle}>

                        <CreateStar album={detail.data}/>
                        <Text style={styles.starNumber1Style}>{detail.data.star}</Text>
                        <Text style={styles.starNumber1Style}>.0 </Text>
                        <Text style={styles.starNumber2Style}>/ 5.0</Text>
                        
                    </View>
                   
                    <Text style={styles.descriptionsStyle}>{detail.data.descriptions}</Text>
                    {/* <Button  style={styles.buttonStyle} title='BUY NOW FOR $46.99' color= '#6200EE' }></Button> */}
                    
                        <Pressable style={styles.buttonStyle} onPress={() => Alert.alert('Button pressed')}>
                            <Text style={styles.buttonTextStyle}>BUY  NOW  FOR  $46.99</Text>
                        </Pressable>

                    
                    
                    
            </View>        
                     
                
                
        </View>
                    
           
      
    
    );

};
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        // width:360 ,
        height:56,
        paddingLeft:10,
        paddingRight:10,



    },
    titletextStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: '500',
        color: '#131313',
        marginTop:28,

    },
    authortextStyle:{
        marginTop:8,
        marginBottom:8,
        fontSize: 14,
        color: '#666666',

    },
    contentStyle:{
        alignItems: "center",
        paddingTop:8,
        paddingLeft:20,
        paddingRight:20,
    },
    imageStyle: {
        height: 300,
        width: 210,
        borderTopRightRadius:6,
        borderBottomRightRadius:6,

    
    },
    StarbarStyle:{
        flexDirection:"row",
        marginBottom:18,
    },
    starNumber1Style:{
        color:'#131313'

    },
    starNumber2Style:{
        color:'gray'

    },

    descriptionsStyle:{
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        paddingBottom:28,
        // alignItems: "center",

    },
    buttonStyle:{
        // backgroundColor:'black',
        // paddingLeft:100,
        width:190,
        height:36,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#6200EE',
        borderRadius: 4,
    },
    buttonTextStyle:{
        color:'#FFFFFF',
        fontSize: 14,
    },
    bookmarkStyle:{
        // borderWidth:1,
        // borderColor:'black',
    }

});

export default NewDetail;