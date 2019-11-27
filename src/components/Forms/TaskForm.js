import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Switch,
} from 'react-native';
import PropTypes from 'prop-types';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            isFinished: null,
        };
    }

    componentWillMount() {
        this.setState({
            name: this.props.name,
            description: this.props.description,
            isFinished: this.props.isFinished,
        });
    }

    render() {
        const {
            edit, addToData, editTask, clearForm,
        } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => clearForm()}>
                        <Text style={styles.btnCloseModal}>x</Text>
                    </TouchableOpacity>
                    {edit ? (
                        <Text style={styles.heading}>Edit Task</Text>
                    ) : (
                        <Text style={styles.heading}>Add new item</Text>
                    )}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>name</Text>
                        <TextInput
                            value={this.state.name}
                            style={styles.input}
                            label="Name"
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            label="Description"
                            onChangeText={(description) => this.setState({ description })}
                            value={this.state.description}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>
                            Is Finished
                        </Text>
                        <Switch
                            onValueChange={(isFinished) => this.setState({ isFinished })}
                            value={this.state.isFinished}
                        />
                    </View>
                </View>
                <Button
                    disabled={
                        !this.state.name || !this.state.description
                    }
                    onPress={() => { edit ? editTask(this.state.name, this.state.description, this.state.isFinished) : addToData(this.state.name, this.state.description, this.state.isFinished); }}
                    style={styles.btn}
                    title="Save"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formGroup: {
        marginBottom: 15,
    },
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 10,
    },
    input: {
        borderWidth: 0,
        borderColor: '#303030',
        borderRadius: 25,
        backgroundColor: '#fff',
        padding: 8,
        paddingLeft: 15,
        marginTop: 5,
    },
    wrapper: {
        flex: 1,
        padding: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFA400',
    },
});

TaskForm.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    edit: PropTypes.bool,
    addToData: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    isFinished: PropTypes.bool,
};

TaskForm.defaultProps = {
    isFinished: false,
    edit: false,
};

export default TaskForm;
