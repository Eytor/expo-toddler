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

    // eslint-disable-next-line class-methods-use-this
    checkColor(color) {
        if (!color) return true;
        const regex = /^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}))$/;
        return regex.test(color);
    }

    render() {
        const {
            edit,
            addToData,
            editItem,
            clearForm,
        } = this.props;
        return (
            <View style={{ flex: 1 }}>
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
                                style={[
                                    styles.modalInput,
                                    !this.state.name && styles.errorInput,
                                ]}
                                label="Name"
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}
                            />
                            {!this.state.name && (
                                <Text style={{ color: '#D62828' }}>
                                    Name is required
                                </Text>
                            )}
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.modalLabel}>Color</Text>
                            <TextInput
                                style={[
                                    styles.modalInput,
                                    !this.checkColor(this.state.color)
                                        && styles.errorInput,
                                ]}
                                label="Color"
                                onChangeText={(color) => this.setState({ color })}
                                value={this.state.color}
                            />
                            {!this.checkColor(this.state.color) && (
                                <Text style={{ color: '#D62828' }}>
                                    color should be on the form (#111 or #11111)
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
                <Button
                    disabled={!this.state.name}
                    // eslint-disable-next-line no-unused-expressions
                    onPress={() => {
                        edit
                            ? editItem(this.state.name, this.state.color)
                            : addToData(this.state.name, this.state.color);
                    }}
                    style={styles.btn}
                    title="Save"
                    color="#4CB944"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 50,
        width: '100%',
    },
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalWrapper: {
        flex: 1,
        padding: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFA400',
    },
    btnCloseModal: {
        textTransform: 'uppercase',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    formGroup: {
        marginBottom: 15,
    },
    modalLabel: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 10,
    },
    modalInput: {
        borderWidth: 0,
        borderColor: '#303030',
        borderRadius: 25,
        backgroundColor: '#fff',
        padding: 8,
        paddingLeft: 15,
        marginTop: 5,
    },
    errorInput: {
        borderWidth: 2,
        borderColor: '#D62828',
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
