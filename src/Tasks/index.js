import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image, Modal, TextInput, Button, Switch,
} from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import * as data from '../../db/data.json';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.openEdit = this.openEdit.bind(this);
        this.addToTasks = this.addToTasks.bind(this);
        this.editTask = this.editTask.bind(this);
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

    addToTasks() {
        const newTasks = [...this.state.tasks];
        const newId = data.tasks[data.tasks.length - 1].id + 1;
        const newTask = {
            id: newId,
            name: this.state.name,
            description: this.state.description,
            isFinished: this.state.isFinished,
        };
        newTasks.push(newTask);
        this.setState({
            tasks: newTasks,
            name: null,
            description: null,
            isFinished: null,
            modalVisible: false,
        });
        data.tasks.push(newTask);
    }

    editTask() {
        const newTasks = [...this.state.tasks];
        const index = newTasks.findIndex((i) => i.id === this.state.workingId);
        const newTask = {
            id: this.state.workingId,
            name: this.state.name,
            description: this.state.description,
            isFinished: this.state.isFinished,
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

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
        const { tasks, id } = this.state;
        const list = tasks.map((element) => (
            <View key={element.id}>
                <Text style={styles.taskHeading}>{element.name}</Text>
                <View
                    style={[
                        styles.contentWrapper,
                        element.isFinished
                            ? { borderColor: '#97CC04' }
                            : { borderColor: '#D62828' },
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.deleteWrapper}
                    >
                        <View style={styles.arrowTop} />
                        <View style={styles.arrowBot} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{element.description}</Text>
                    <View style={styles.edit}>
                        <TouchableOpacity onPress={() => this.openEdit()}>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={require('../../assets/cogwheel.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        ));
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.modalWrapper}>
                        {this.state.edit ? (
                            <Text style={styles.heading}>Edit item</Text>
                        ) : (
                            <Text style={styles.heading}>Add new item</Text>
                        )}
                        <View>
                            <TouchableOpacity onPress={() => this.clearForm()}>
                                <Text style={styles.btnCloseModal}>x</Text>
                            </TouchableOpacity>
                            <View style={styles.formGroup}>
                                <Text style={styles.modalLabel}>Name</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.modalLabel}>
                                    Description
                                </Text>
                                <TextInput
                                    style={styles.modalInput}
                                    onChangeText={(description) => this.setState({ description })}
                                    value={this.state.description}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.modalLabel}>
                                    Is Finished
                                </Text>
                                <Switch
                                    style={styles.modalInput}
                                    onValueChange={(isFinished) => this.setState({ isFinished })}
                                    value={this.state.isFinished}
                                />
                            </View>
                        </View>
                    </View>
                    <Button
                        disabled={
                            !this.state.name || !this.state.thumbnailPhoto
                        }
                        onPress={
                            this.state.edit ? this.editItem : this.addToData
                        }
                        style={styles.btn}
                        title="Save"
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
        paddingRight: 30,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderLeftWidth: 5,
        minHeight: 75,
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
    taskHeading: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        color: '#303030',
    },
    deleteWrapper: {
        position: 'absolute',
        right: 0,
        top: 10,
        width: 15,
        height: 15,
    },
    arrowTop: {
        position: 'absolute',
        width: 2,
        height: '100%',
        top: 0,
        left: 0,
        transform: [{ rotate: '45deg' }],
        backgroundColor: '#303030',
    },
    arrowBot: {
        position: 'absolute',
        width: 2,
        height: '100%',
        bottom: 0,
        left: 0,
        transform: [{ rotate: '-45deg' }],
        backgroundColor: '#303030',
    },

    edit: {
        position: 'absolute',
        right: 5,
        bottom: 10,
    },
});

export default Tasks;
