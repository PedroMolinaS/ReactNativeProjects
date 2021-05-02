import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

const Input = ({ onChange, value, onSubmit }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Agregar listado de tareas</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={onSubmit}
            />
            {/* <Button
                title="Guardar"
                onPress={onSubmit}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    item: {
        color: '#eee',
        marginTop: 10,
    },
    input: {
        height: 30,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        textAlign: 'center',
        marginVertical: 10,
        color: '#eee',
        backgroundColor: '#0054dd',

    }
})

export default Input
