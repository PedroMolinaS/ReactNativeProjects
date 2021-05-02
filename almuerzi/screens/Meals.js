import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import ListItem from '../components/ListItem'
import useFetch from '../hooks/useFetch'



const Meals = ({ navigation }) => {

    const {data: meals, loading} = useFetch("https://serverless-pedevdro.vercel.app/api/meals")

    return (
        <View style={styles.container}>
            {
                loading ? <Text style={styles.item}>Cargando...</Text> :

                    <FlatList
                        style={styles.list}
                        data={meals}
                        keyExtractor={objMeal => objMeal._id}
                        renderItem={({ item }) => {
                            return (
                                <ListItem
                                    name={item.name}
                                    key={item._id}
                                    onPress={() => navigation.navigate('Modal', {
                                        _id: item._id,
                                    })
                                    }
                                />
                            )
                        }
                        }
                    />
            }
        </View>
    )
}

Meals.navigationOptions = ({
    title: 'Comidas disponibles',
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#123',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        alignSelf: 'stretch'
    },
    item:{
        color: 'white'
    }
})


export default Meals
