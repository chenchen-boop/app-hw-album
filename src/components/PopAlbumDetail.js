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
        <View style={styles.starBarStyle} >
            <CreateStar album={album} />
        </View>
        
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </View>
    

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    // borderRadius:,
    
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    // shadowRadius: 2,
    elevation: 1,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10
  },
  cardSectionStyle: {
    // padding: 5,
      // backgroundColor: "#fff",
      // borderColor: "#ddd",
      //  borderBottomWidth: 10
      
    },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    width: 140,
    height: 18,
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    lineHeight: 18,
    marginTop:16,

  },
  headerContentStyle: {
    width: 140,
    height: 14,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#131313',
    opacity: 0.5,
    marginTop:8,
  },
  
  imageStyle: {
    height: 200,
    width: 140,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,

    
  },
  starBarStyle:{
    marginTop:16,
    
  }
});

export default PopAlbumDetail;