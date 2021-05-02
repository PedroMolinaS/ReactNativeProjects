import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import { Formik, useFormikContext, useField } from 'formik'
import * as Yup from 'yup';

const MyInput = ({ fieldName, ...props }) => {
  const [field, meta] = useField(fieldName)

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={field.onChange(fieldName)}
        value={field.value}
        onBlur={field.onBlur(fieldName)}
        {...props}
      />
      {
        meta.error && meta.touched ? <Text style={{color: 'red'}}>{meta.error}</Text>: null
      }
    </>

  )
}

const EmailForm = () => {
  const { submitForm } = useFormikContext()
  return (
    <>
      <Text>Formulario en Formik</Text>
      <MyInput fieldName="email" />
      <MyInput fieldName="nombre" />
      <Button title='Enviar' onPress={submitForm} />
    </>
  )
}

export default function App() {

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', nombre:'' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Email no válido')
            .required('Requerido'),
          nombre: Yup.string()
            .min(5)
            .required('Requerido'),
        })}
        onSubmit={x => console.log(x)}
      >
        <EmailForm />
      </Formik>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#123',
    color: '#fff',
    textAlign: 'center'
  }
});
