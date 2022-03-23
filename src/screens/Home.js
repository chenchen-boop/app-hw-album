import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../components/Header";
import AlbumList from "../components/AlbumList";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header /> 
      <AlbumList/>
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;