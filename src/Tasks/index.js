import React, { Component } from 'react';
import { View, Text } from 'react-native';
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

        console.log(id, tasks);
        this.setState({ tasks, id });
    }

    componentWillUnmount() {
        // data.tasks = this.state.tasks;
    }

    render() {
        const { tasks, id } = this.state;
        const list = tasks.map((element) => (
            <View key={element.id}>
                <Text>{element.name}</Text>
                <Text>{element.description}</Text>
                <Text>{element.isFinished ? 'Finished' : 'Not Finished'}</Text>
            </View>
        ));
        return <View>{list}</View>;
    }
}

Tasks.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default Tasks;
