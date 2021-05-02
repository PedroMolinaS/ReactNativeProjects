import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const ListItem = ({ name, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.list}
            onPress={onPress}
        >
            <Text style={styles.item}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 60,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    item: {
        color: 'white',
        fontSize: 18
    }
})



export default ListItem
