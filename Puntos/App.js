import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Input from './components/Input';
import ListPuntos from './components/ListPuntos';
import MiMap from './components/MiMap';
import MiModal from './components/MiModal';
import Panel from './components/Panel';

export default function App() {

  const [puntos, setPuntos] = useState([]);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [nombre, setNombre] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState("new_punto") // new_punto, all_puntos
  const [pointsFilter,setPointsFilter] = useState(true)

  const handleLongPress = ({ nativeEvent }) => {
    // let newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    // setPuntos(newPuntos)
    setVisibilityFilter("new_punto")
    setPuntoTemp(nativeEvent.coordinate)
    setVisible(true)
  }

  const handleChangeText = (text) => {
    setNombre(text);
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos(puntos.concat(newPunto))
    setVisible(false)
    setNombre("")
    setPuntoTemp({})
  }

  const handleLista = () => {
    setVisibilityFilter("all_puntos")
    setVisible(true)
  }

  const cerrarLista = () => {
    setVisible(false)
  }

  const handlePuntos = () => {
    setPointsFilter(!pointsFilter)

  }

  return (
    <View style={styles.container}>
      <MiMap onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Panel handleLista={handleLista} textLista={"Lista"} handlePuntos={handlePuntos} />
      <MiModal visible={visible}>
        {
          visibilityFilter === "new_punto" ?
            <>
              <View style={styles.input}>
                <Input
                  title="Nombre"
                  placeholder="Nombre del sitio"
                  onChangeText={handleChangeText}
                />
              </View>
              <View style={styles.button}>
                <Button title="Guardar" onPress={handleSubmit} />
              </View>
            </>
            : <ListPuntos puntos={puntos} cerrarLista={cerrarLista} />
        }
      </MiModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  input: {
    // marginTop: 5,
    margin: 10,
    textAlign: 'center',
    height: 50,

  },
  button: {
    margin: 10
  }
});
