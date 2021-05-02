import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ListItem = ({ desc, completed, onPress }) => {
    // console.log('aaaa', desc);
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            {
                completed ?
                    <Text style={[styles.text, styles.strike]}>{desc}</Text>
                    : <Text style={styles.text}>{desc}</Text>
            }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    text: {
        color: '#fff',
        fontSize: 18,

    },
    strike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    }

})

export default ListItem
