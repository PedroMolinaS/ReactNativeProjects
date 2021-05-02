import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux'
import { complete, saveTodo } from './reducers/todos';
import Input from './components/Input';

const MiApp = ({ data, complete, submit }) => {

    const [tarea, setTarea] = useState('')

    const handleChange = (val) => {
        // console.log(val);
        setTarea(val)
    }

    const handleSubmit = () => {
        submit(tarea)
        setTarea('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.item}>Listado de ToDo</Text>
            <Input 
                onChange={handleChange}
                value={tarea}
                onSubmit={handleSubmit}
            />
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) => {
                    return <ListItem onPress={() => complete(item.id)} desc={item.desc} completed={item.completed} />
                }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#123',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        paddingTop: 10,
    },
    list: {
        alignSelf: 'stretch'
    },
    item: {
        color: '#eee'
    }
});

const mapStateToProps = state => {
    return { data: state.todos }
}

const mapDispatchToProps = dispatch => ({
    complete: (id) =>{
        dispatch(complete(id))
    },
    submit: (val) => dispatch(saveTodo(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(MiApp)
