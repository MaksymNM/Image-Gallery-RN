import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native"
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedImage } from "./features/images-slice";


const SelectedImage = ({navigation, route}) => {
    const dispatch = useDispatch();
    const {selectedImage} = useSelector(state => state.images);


    useEffect(() => {
        dispatch(getSelectedImage({id: route.params.id}));
    }, [route.params.id])
    
    
    
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {selectedImage === null 
            ? <Text style={{ fontSize: 24}}>Loading..</Text>
            :<Image 
                style={{height: '100%', width: '100%'}}
                source={{uri: selectedImage.urls.raw}}
            />
            }
            
        </View>
    )
};

export default SelectedImage;