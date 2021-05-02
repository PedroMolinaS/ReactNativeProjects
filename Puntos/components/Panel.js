import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default function Panel({ handleLista, textLista, handlePuntos }) {
    return (
        <View style={styles.botones}>
            <View style={styles.boton}>
                <Button  title={textLista} onPress={handleLista} />
            </View>
            <View>
                <Button title="Mostrar/Ocultar" onPress={handlePuntos} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    botones: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor: '#eee',
    },
    boton: {
        marginRight: 10,
    }
})