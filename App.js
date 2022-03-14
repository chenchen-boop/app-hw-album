import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import albumData from "./src/json/albums.json";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Header title={albumData.albumTitle} />
      <AlbumList />
    </SafeAreaView>
  );
};

export default App;