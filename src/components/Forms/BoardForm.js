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

class BoardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            image: null,
        };
    }

    componentWillMount() {
        this.setState({
            name: this.props.name,
            description: this.props.description,
            image: this.props.image,
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
            <View style={{ flex: 1 }}>
                <View style={styles.wrapper}>
                    <TouchableOpacity
                        style={styles.deleteWrapper}
                        onPress={() => clearForm()}
                    >
                        <View style={styles.arrowTop} />
                        <View style={styles.arrowBot} />
                    </TouchableOpacity>
                    {edit ? (
                        <Text style={styles.heading}>Edit Board</Text>
                    ) : (
                        <Text style={styles.heading}>Add New Board</Text>
                    )}
                    <View style={styles.formGroup}>
                        <Text style={styles.modalLabel}>Name</Text>
                        <TextInput
                            value={this.state.name}
                            style={styles.input}
                            modalLabel="Name"
                            onChangeText={(name) => this.setState({ name })}
                        />
                        {!this.state.name && (
                            <Text style={{ color: '#D62828' }}>
                                Name is required
                            </Text>
                        )}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.modalLabel}>Description</Text>
                        <TextInput
                            modalLabel="Description"
                            onChangeText={(description) => this.setState({ description })}
                            value={this.state.description}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.modalLabel}>Image</Text>
                        <TextInput
                            modalLabel="Thumbnail Photo"
                            onChangeText={(image) => this.setState({ image })}
                            value={this.state.image}
                            style={[
                                styles.input,
                                !this.state.image && styles.errorInput,
                            ]}
                        />
                        {!this.state.image && (
                            <Text style={{ color: '#D62828' }}>
                                Image is required
                            </Text>
                        )}
                    </View>
                </View>
                <Button
                    disabled={!this.state.name || !this.state.image}
                    onPress={() => {
                        edit
                            ? editItem(
                                this.state.name,
                                this.state.description,
                                this.state.image,
                            )
                            : addToData(
                                this.state.name,
                                this.state.description,
                                this.state.image,
                            );
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
    btnCloseModal: {
        textTransform: 'uppercase',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
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
    formGroup: {
        marginBottom: 15,
    },
    modalLabel: {
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
    errorInput: {
        borderWidth: 2,
        borderColor: '#D62828',
    },
    deleteWrapper: {
        position: 'absolute',
        right: 10,
        top: 35,
        width: 20,
        height: 20,
        zIndex: 100,
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
});

BoardForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    edit: PropTypes.bool,
    addToData: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
};

BoardForm.defaultProps = {
    name: '',
    description: '',
    image: '',
    edit: false,
};

export default BoardForm;
