import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            color: null,
        };
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            color: this.props.color,
        });
    }

    render() {
        const {
            edit,
            addToData,
            editItem,
            clearForm,
        } = this.props;
        return (
            <View>
                <View style={styles.modalWrapper}>
                    {edit ? (
                        <Text style={styles.heading}>Edit item</Text>
                    ) : (
                        <Text style={styles.heading}>Add new item</Text>
                    )}
                    <View>
                        <TouchableOpacity onPress={() => clearForm()}>
                            <Text style={styles.btnCloseModal}>x</Text>
                        </TouchableOpacity>
                        <View style={styles.formGroup}>
                            <Text style={styles.modalLabel}>Name</Text>
                            <TextInput
                                style={styles.modalInput}
                                label="Name"
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.modalLabel}>Color</Text>
                            <TextInput
                                style={styles.modalInput}
                                label="Color"
                                onChangeText={(color) => this.setState({ color })}
                                value={this.state.color}
                            />
                        </View>
                    </View>
                </View>
                <Button
                    disabled={!this.state.name || !this.state.color}
                    onPress={() => { edit ? editItem(this.state.name, this.state.color) : addToData(this.state.name, this.state.color); }}
                    style={styles.btn}
                    title="Save"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formGroup: {
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

ListForm.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    edit: PropTypes.bool,
    addToData: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
};

ListForm.defaultProps = {
    name: '',
    color: '',
    edit: false,
};

export default ListForm;
