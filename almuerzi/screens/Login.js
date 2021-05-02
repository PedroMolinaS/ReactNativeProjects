import React from 'react'
import { AsyncStorage,View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import useForm from '../hooks/useForm'
import { postLogin } from '../services/auth'

const Login = ({ navigation }) => {

    const initialState = {
        email: '',
        password: '',
    }

    const onSubmit = (campos) => {
        postLogin(campos).then((rpta) => {

            if (rpta?.token !== undefined) {
                AsyncStorage.setItem('token', rpta.token)
                return navigation.navigate('Meals')
            }
            return Alert.alert(
                'Error',
                rpta.error
            )
        })

    }

    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Iniciar Sesión</Text>
            <TextInput
                value={inputs.email}
                onChangeText={subscribe('email')}
                autoCapitalize='none'
                placeholder='email'
                style={styles.input} />
            <TextInput
                value={inputs.password}
                onChangeText={subscribe('password')}
                autoCapitalize='none'
                placeholder='contraseña'
                secureTextEntry={true}
                style={styles.input} />
            <View style={styles.botones}>
                <View style={styles.registrar}>
                    <Button
                        style={styles.boton}
                        title='Ingresar'
                        onPress={() => handleSubmit()}
                    />
                </View>
                <View style={styles.registrar}>
                    <Button
                        style={styles.boton}
                        title='Ir a Registrarse'
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#123',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'white'
    },
    input: {
        height: 40,
        borderColor: '#eee',
        borderWidth: 1,
        backgroundColor: '#ddd',
        color: '#000',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    titulo: {
        color: '#ddd',
        marginBottom: 20,
        fontSize: 22,
    },
    botones: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    registrar: {
        margin: 10,
    }
})

export default Login
