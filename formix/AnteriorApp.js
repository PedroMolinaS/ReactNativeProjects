import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';
import { useFormik } from 'formik'
import * as Yup from 'yup';

// Validacion propia
// const validate = (values) => {
//   const errors = {}
//   if (!values.email) {
//     errors.email = 'Requerido'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Correo invalido'
//   }
//   return errors
// }

export default function AnteriorApp() {

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    // validate, // referencia a validación propia
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Correo invalido')
        .required('Requerido')
    }),
    onSubmit: x => console.warn(x)
  })

  return (
    <View style={styles.container}>
      <Text>Correo electrónico</Text>
      <TextInput
        onBlur={ formik.handleBlur('email')}
        style={styles.input}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
      {
        formik.errors.email && formik.touched.email ? <Text>{formik.errors.email}</Text> : null
      }
      <Button title="Guardar" onPress={formik.handleSubmit} />
    </View>
  );
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
