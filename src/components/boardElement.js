import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text, View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';

class BoardElement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            id, name, description, thumbnailPhoto,
        } = this.props;
        return (
            <View style={styles.boardListItem}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: thumbnailPhoto }}
                />
                <Text style={styles.boardListItemText}>{name}</Text>
                <Text>{description}</Text>
                <TouchableOpacity
                    onPress={() => this.props.removeItem(id)}
                >
                    <Text>delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.openEdit(id, name, description, thumbnailPhoto)}
                >
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

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
    boardListItem: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 30,
    },

    boardListItemText: {
        fontSize: 16,
        color: '#303030',
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
});

BoardElement.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired,
    openEdit: PropTypes.func.isRequired,
};

BoardElement.defaultProps = {
    description: '',
};

export default BoardElement;
