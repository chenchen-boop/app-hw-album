import React from "react";
import { StyleSheet, Text, View ,Alert} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <View >
          <MaterialCommunityIcons  name='menu' style={styles.iconStyle} onPress={() => Alert.alert('Button pressed')}/>
        </View>
        <View >
          <Icon  name='search' style={styles.iconStyle} onPress={() => Alert.alert('Button pressed')}/>
        </View>
        
        

        {/* <Text style={styles.textStyle}>Albums</Text> */}
        
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    height:56 ,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
    flexDirection:"row",
    paddingLeft:8,
    paddingRight:8,
    
  },
  textStyle: {
    fontSize: 20
  },
  iconStyle:{
    // width:40,
    // height:40,
    fontSize: 20
    
    


  }
});

export default Header;