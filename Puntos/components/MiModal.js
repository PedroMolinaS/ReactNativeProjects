import React from 'react';
import { StyleSheet, View, Modal, Dimensions } from 'react-native';


export default function MiModal ({children, visible}) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.modal}>
                <View style={styles.content}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    content: {
        // padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        width: Dimensions.get('window').width - 100
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});
