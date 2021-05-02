import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default function MiMap({ onLongPress, puntos, pointsFilter }) {

    return (
        <MapView
            style={styles.mapa}
            onLongPress={onLongPress}
        >
            {
                !pointsFilter ? <></> :
                puntos.map((objPunto) => {
                    return (
                        <Marker
                            key={objPunto.name}
                            coordinate={objPunto.coordinate}
                            title={objPunto.name} />
                    )
                })
            }
        </MapView>
    )
}

const styles = StyleSheet.create({
    mapa: {
        height: Dimensions.get('window').height - 60,
        width: Dimensions.get('window').width,
    }
})