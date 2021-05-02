import React from 'react'
import { View, Text, StyleSheet, Dimensions, Button, AsyncStorage } from 'react-native'
import useFetch from '../hooks/useFetch'
import { postPedido } from '../services/orders'

const Modal = ({ navigation }) => {

    const _id = navigation.getParam('_id')

    const { loading, data: menu } = useFetch(`https://serverless-pedevdro.vercel.app/api/meals/${_id}`)

    const registrarPedido = () => {

        AsyncStorage.getItem('token').then(token => {
            if (token) {
                postPedido(token,_id).then(({ status, pedido }) => {
                    console.log(status, pedido);
                    if (status === 201) {
                        // console.log(pedido);
                        alert('Pedido registrado con éxito')
                        return navigation.navigate('Meals')
                    };
                    alert('No se pudo registrar el pedido')
                })
            }

        })


    }

    return (
        <View>
            {
                loading ?
                    <View style={styles.list}>
                        <Text style={styles.cargando}>Cargando...</Text>
                    </View> :
                    <>
                        <View style={styles.list}>
                            <Text style={styles.item}>{menu._id}</Text>
                            <Text style={styles.item}>{menu.name}</Text>
                            <Text style={styles.item}>{menu.desc}</Text>
                        </View>
                        <View style={styles.botones}>
                            <Button
                                style={styles.boton}
                                title="Cancelar"
                                onPress={() => navigation.navigate('Meals')}
                            />
                            <Button
                                style={styles.boton}
                                title="Aceptar"
                                onPress={registrarPedido}
                            />
                        </View>
                    </>
            }
            {/* <Text>Modal</Text> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#123',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        alignSelf: 'stretch',
        backgroundColor: '#123',
        height: Dimensions.get('window').height - 80,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10,
        marginTop: 30,
    },
    item: {
        color: 'white'

    },
    botones: {
        // flex: 1,
        flexDirection: 'row',
        color: '#123',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        backgroundColor: '#eee',
    },
    boton: {
        color: '#444',
        backgroundColor: '#033',
    },
    cargando: {
        backgroundColor: '#111',
        color: 'white',
    }
})

export default Modal
