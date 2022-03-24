import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView ,Text,View,Pressable} from "react-native";
import Detail from "../json/album_detail.json";
//import react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const NewDetail= ()=>{
    const navigation = useNavigation();
    return(
        <View>
            
            <Text>Newpage</Text>
            <Pressable onPress={()=>navigation.navigate('Home')}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </Pressable>
        </View>
    
    );

};

export default NewDetail;