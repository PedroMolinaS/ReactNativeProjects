import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

const DetailPost = ({ navigation }) => {
    
    const idPost = navigation.getParam('idPost')
    const title = navigation.getParam('title')
    const body = navigation.getParam('body')

    return (
        <View>
            <Text>Post de {navigation.getParam('user_name')}</Text>
            <Text>Post #{idPost}</Text>
            <Text>Titulo: {title}</Text>
            <Text>{body}</Text>
        </View>
    )
}

export default DetailPost

