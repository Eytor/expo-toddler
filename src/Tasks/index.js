import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as data from '../../db/data.json';

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
        this.setState({ tasks, id });
    }

    componentWillUnmount() {
        //data.tasks = this.state.tasks;
    }

    render() {
        const { tasks, id } = this.state;
        const list = tasks.map((element) => (
            <View key={element.id}>
                <Text style={styles.heading}>{element.name}</Text>
                <View style={[styles.contentWrapper, element.isFinished ? { borderColor: '#97CC04' } : { borderColor: '#D62828' }]}>
                    <Text style={styles.text}>{element.description}</Text>
                </View>
            </View>
        ));
        return (
            <View style={styles.container}>
                {list}
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
    contentWrapper: {
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderLeftWidth: 5,
    },
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text:{
        fontSize: 16,
        color: '#303030',
    }
});

export default Tasks;
