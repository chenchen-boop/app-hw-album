import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import AlbumDetail from "./AlbumDetail";
import PopAlbumDetail from "./PopAlbumDetail";
import NewAlbumDetail from "./NewAlbumDetail";

import sections from "../json/album_section.json";

const Albumlist = () => {

  const renderSectionHeader = ({section}) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>

      {section.horizontal ? (
        <FlatList
          data={section.data}
          
          renderItem={({ item }) => <PopAlbumDetail album={item}  />}

          keyExtractor={ item => item.title }

          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        
      ) : null}
    </>
  );
  

  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <AlbumDetail album={item} />
  };



  return (
    <SectionList 
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }

      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}

     
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: 'uppercase',
  },
})

export default Albumlist;