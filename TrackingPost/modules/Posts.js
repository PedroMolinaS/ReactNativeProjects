import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getPosts } from '../services/services';


const Posts = ({ navigation }) => {

    const [cargando, setCargando] = useState(true)
    const [postsUser, setPostsUser] = useState([])
    const idUser = navigation.getParam('idUser')

    const obtenerPosts = () => {
        getPosts().then((rpta) => {
            if (rpta) {
                if (idUser) {
                    let newPosts = rpta.filter(objPost => objPost.userId === idUser)
                    if (newPosts.length > 0) {
                        setPostsUser(newPosts)
                        setCargando(false)
                    } else {
                        console.log("no hay posts de este usuario");
                    }
                } else {
                    console.log('no hay postUser');
                }
            } else {
                console.log('no hay ningún posts');
            }
        })
    }

    useEffect(() => {
        obtenerPosts()
    }, [])
    return (
        <View style={styles.listaUser}>
            <Text>Lista de Posts:</Text>
            {
                cargando ? <Text>Cargando...</Text> :
                    <FlatList
                        data={postsUser}
                        keyExtractor={x => String(x.id)}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.user}
                                    onPress={() => {
                                        navigation.navigate('DetallePost', {
                                            idPost: item.id,
                                            body: item.body,
                                            title: item.title,
                                            user_name: navigation.getParam('user_name')
                                        })
                                    }}
                                >
                                    <Text
                                        style={styles.item}
                                    >{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
            }
        </View>
    )
}

export default Posts

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
        alignItems: 'flex-start',
        backgroundColor: '#c23',
    },
    item: {
        color: 'white',
        fontSize: 20
    }
})
