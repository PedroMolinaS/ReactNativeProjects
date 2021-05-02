import React, { useEffect } from 'react'
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native'

const AuthLoading = ({navigation}) => {

    useEffect(()=>{
        AsyncStorage.getItem('token')
        .then(x => {
            navigation.navigate(x ? 'Root': 'OnBoarding')
        })
    },[])

    return (
        <View>
            {/* <Text>Carga</Text> */}
            <ActivityIndicator />
        </View>
    )
}

export default AuthLoading
