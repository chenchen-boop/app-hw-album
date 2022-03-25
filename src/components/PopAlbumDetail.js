import React from "react";
import { StyleSheet, Text, View, Image,Pressable} from "react-native";
import { Linking } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import CreateStar from './CreateStar'; 


const PopAlbumDetail =(props ) => {
   let { album } = props;
   const navigation = useNavigation();
   return (
     
   
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>

          
      

        <Pressable onPress={()=>navigation.navigate('Details')}>
          <Image
              style={styles.imageStyle}
              source={{uri: album.image}}
            />
        </Pressable>
            
          
        
        </View>
      </View>  
      <View style={styles.headerContainerStyle}>
        <CreateStar/>
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 11,
    fontWeight: '300',
    color: "#222",
    width: '100%'
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 130,
    width: 130,
  }
});

export default PopAlbumDetail;