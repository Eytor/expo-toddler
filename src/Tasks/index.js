import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import * as data from '../../db/data.json';
import Task from '../components/task';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            id: null,
        };
    }

    componentWillMount() {
        const { id } = this.props.navigation.state.params;
        const tasks = data.tasks.filter((element) => element.listId === id);

        console.log(id, tasks);
        this.setState({ tasks, id });
    }

    componentWillUnmount() {
        // data.tasks = this.state.tasks;
    }

    render() {
        const { tasks, id } = this.state;
        const list = tasks.map((element) => (
            <Task
                id={element.id}
                name={element.name}
                isFinished={element.isFinished}
                description={element.description}
            />
        ));
        return (
            <View style={{flex: 1, width: '100%'}}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Your tasks</Text>
                    <ScrollView>
                        {list}
                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <Text style={styles.btnText}>Add task!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Tasks.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA400',
        width: '100%',
        padding: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 50,
        width: '100%',
        backgroundColor: '#4CB944',
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#fff',
    },
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
});

export default Tasks;
