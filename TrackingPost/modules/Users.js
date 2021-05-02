import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getUsers } from '../services/services';

const Users = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const [cargando, setCargando] = useState(true)

    const obtenerUsuarios = () => {
        getUsers().then((rpta) => {
            if (rpta) {
                setUsers(rpta)
                setCargando(false)
            } else {
                console.log("Users sin conexión");
            }
        })
    }

    useEffect(() => {
        obtenerUsuarios()
    }, [])

    return (
        <View style={styles.listaUser}>
            <Text>Listado de Usuarios</Text>
            {
                cargando ? <Text>Cargando...</Text> :
                    <FlatList
                        data={users}
                        keyExtractor={objUser => String(objUser.id)}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.user}
                                onPress={() => {
                                    navigation.navigate('Posts', {
                                        idUser: item.id,
                                        user_name: item.name
                                    })
                                }}
                            >
                                <Text
                                    style={styles.item}
                                >{item.name}</Text>
                            </TouchableOpacity>
                        }
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    listaUser: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    user: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        padding: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c23',
    },
    item: {
        color: 'white',
        fontSize: 18
    }
})

export default Users