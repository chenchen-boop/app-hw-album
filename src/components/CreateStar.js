import React from "react";
import { StyleSheet, Text, View, Image,FlatList} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import sections from "../json/album_section.json";


const CreateStar=(props)=>{

    const Star=props.album.star;

    const Redstar=()=>{
        return(
             <FontAwesome name="star" size={24} color="red" />
        );
       
    };
    const Blackstar=()=>{
        return(
            <FontAwesome name="star" size={24} color="black" />
       );
    };




    
    // return(


    //     //<Text>STAR</Text>
    //     // for( i=0;i<star;i++){
    //     //     <FontAwesome name="star" size={24} color="red" />      
    //     // };
    //     // for( i=0;i<5-star;i++){
    //     //     <FontAwesome name="star" size={24} color="black" /> 
    //     // };
       
    
        
    //         // {/* <View>
    //         //     <FontAwesome name="star" size={24} color="black" />
    //         //     <FontAwesome name="star" size={24} color="red" />
    //         // </View> */}
    // );

    // return(<Text>{Star}</Text>)
    switch (Star){
            case "0":return(<Text><Blackstar/><Blackstar/><Blackstar/><Blackstar/><Blackstar/></Text>);
            case "1":return(<Text><Redstar/><Blackstar/><Blackstar/><Blackstar/><Blackstar/></Text>);
            case "2":return(<Text><Redstar/><Redstar/><Blackstar/><Blackstar/><Blackstar/></Text>);
            case "3":return(<Text><Redstar/><Redstar/><Redstar/><Blackstar/><Blackstar/></Text>);
            case "4":return(<Text><Redstar/><Redstar/><Redstar/><Redstar/><Blackstar/></Text>);
            case "5":return(<Text><Redstar/><Redstar/><Redstar/><Redstar/><Redstar/></Text>);
            default :return(null);


        }
 





};
export default CreateStar;