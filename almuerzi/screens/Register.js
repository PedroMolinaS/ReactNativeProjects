import React from 'react'
import { Alert, View, Text, TextInput, StyleSheet, Button } from 'react-native'
import useForm from '../hooks/useForm'
import { postRegister } from '../services/auth'


const Register = ({ navigation }) => {

    const initialState = {
        email: '',
        password: '',
    }
    const onSubmit = (valor) => {
        postRegister(valor).then((rpta) => {
            if (rpta==='usuario creado con éxito') {
                return Alert.alert(
                    'Usuario registrado con éxito',
                    rpta,
                    [
                        { text: 'Ir al inicio', onPress: ()=>navigation.navigate('Login') }
                    ]
                )
            }
            Alert.alert(
                'Error',
                rpta,
            )
        })
    }

    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Usuario</Text>
            <TextInput
                value={inputs.email}
                onChangeText={subscribe('email')}
                autoCapitalize= 'none'
                placeholder='correo'
                style={styles.input} />
            <TextInput
                value={inputs.password}
                onChangeText={subscribe('password')}
                autoCapitalize= 'none'
                placeholder='contraseña'
                secureTextEntry={true}
                style={styles.input} />
            <View style={styles.botones}>
                <View style={styles.registrar}>
                    <Button style={styles.boton} title='Registrar' onPress={handleSubmit} />
                </View>
                <View style={styles.registrar}>
                    <Button style={styles.boton} title='Ir a Login' onPress={() => navigation.navigate('Login')} />
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

export default Register
