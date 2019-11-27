import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import * as data from '../../db/data.json';
import Task from '../components/task';
import TaskForm from '../components/Forms/TaskForm';

class TaskScreen extends Component {
    constructor(props) {
        super(props);
        this.openEdit = this.openEdit.bind(this);
        this.addToData = this.addToData.bind(this);
        this.editTask = this.editTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.state = {
            tasks: [],
            id: null,
            name: null,
            description: null,
            isFinished: false,
            edit: false,
            workingId: false,
            modalVisible: false,
        };
    }

    componentWillMount() {
        const { id } = this.props.navigation.state.params;
        const tasks = data.tasks.filter((element) => element.listId === id);
        this.setState({ tasks, id });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    editTask(name, description, isFinished) {
        const newTasks = [...this.state.tasks];
        const index = newTasks.findIndex((i) => i.id === this.state.workingId);
        const newTask = {
            id: this.state.workingId,
            name,
            description,
            isFinished,
            listId: this.state.id,
        };
        newTasks[index] = newTask;
        this.setState({
            tasks: newTasks,
        });
        data.tasks[
            data.tasks.findIndex((i) => i.id === this.state.workingId)
        ] = newTask;
        this.clearForm();
    }

    async removeTask(id) {
        let newTasks = [...this.state.tasks];
        const index = newTasks.findIndex((i) => i.id === id);
        newTasks = await [
            ...newTasks.slice(0, index).concat(...newTasks.slice(index + 1)),
        ];
        this.setState({
            tasks: newTasks,
        });
        const newIndex = data.tasks.findIndex((i) => i.id === id);
        data.tasks = [
            ...data.tasks.slice(0, newIndex).concat(...data.tasks.slice(newIndex + 1)),
        ];
    }

    openEdit(id, name, description, isFinished) {
        this.setState({
            modalVisible: true,
            edit: true,
            workingId: id,
            name,
            description,
            isFinished,
        });
    }

    addToData(name, description, isFinished) {
        const newTasks = [...this.state.tasks];
        const newId = data.tasks[data.tasks.length - 1].id + 1;
        const newTask = {
            id: newId,
            name,
            description,
            isFinished,
            listId: this.state.id,
        };
        newTasks.push(newTask);
        this.setState({
            tasks: newTasks,
            modalVisible: false,
        });
        data.tasks.push(newTask);
    }

    clearForm() {
        this.setState({
            modalVisible: false,
            edit: false,
            workingId: null,
            name: null,
            description: null,
            isFinished: false,
        });
    }

    render() {
        const { tasks } = this.state;
        const list = tasks.map((element) => (
            <Task
                key={element.id}
                id={element.id}
                name={element.name}
                isFinished={element.isFinished}
                description={element.description}
                openEdit={this.openEdit}
                removeTask={this.removeTask}
            />
        ));
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <TaskForm
                        name={this.state.name}
                        description={this.state.description}
                        isFinished={this.state.isFinished}
                        edit={this.state.edit}
                        editTask={this.editTask}
                        addToData={this.addToData}
                        clearForm={this.clearForm}
                    />
                </Modal>

                <View style={styles.container}>
                    <Text style={styles.heading}>Your tasks</Text>
                    <ScrollView>{list}</ScrollView>
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

TaskScreen.propTypes = {
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

export default TaskScreen;
