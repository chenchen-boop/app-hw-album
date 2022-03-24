import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <MaterialCommunityIcons  name='menu'/>
        <Icon  name='search'/>

        {/* <Text style={styles.textStyle}>Albums</Text> */}
        
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
    flexDirection:"row",
    
  },
  textStyle: {
    fontSize: 20
  },
});

export default Header;