import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { getImagesList } from './features/images-slice';

const ImagesList = ({navigation}) => {
  const dispatch = useDispatch();
  const {imagesList} = useSelector(state => state.images);
  
  const selectImage = (id) => {
    navigation.navigate('SelectedImage', {id})
    
  }

  useEffect(() => {
    dispatch(getImagesList());
  }, [])

    return (
      <View style={styles.container}>  
        <Text style={styles.header}>Image Gallery</Text>
        {imagesList.length !== 0 ? 
        <FlatList 
        style={styles.list}
        data={imagesList}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => selectImage(item.id)}>
              <View style={styles.items}>
                <Image
                style={{height: 200, width: 240}}
                source={{uri: item.urls.small}}
                />
                <Text>Name: {item.alt_description === null ? 'Noname' : item.alt_description}</Text>
                <Text>Author: {item.user.name}</Text>
              </View>
          </TouchableWithoutFeedback>
          
        )}
        />
        : <Text style={{textAlign: 'center', fontSize: 24}}>Loading..</Text>
      }
        
        </View>
    
        
  )
}

export default ImagesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
   header: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: 'gray',
    width: '100%'
   },
  list: {
   width: '100%',
  },
  items: {
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: 20,
   
  }
 });
