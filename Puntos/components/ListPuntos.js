import React from 'react'
import { View, Text, FlatList, Button, StyleSheet, Dimensions } from 'react-native'

const ListPuntos = ({ puntos, cerrarLista }) => {
    return (
        <>
            <View style={styles.lista}>
                <FlatList
                    data={puntos.map(x => x.name)}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    }
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button title="Cerrar" onPress={cerrarLista} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    lista: {
        height: Dimensions.get('window').height - 200
    },
    item: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        padding: 10,
        height: 40,
        justifyContent: 'center',
        // textAlign: 'center'
    },
    button: {
        margin: 10
    }
})

export default ListPuntos
