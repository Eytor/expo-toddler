import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text, View,
} from 'react-native';

class ListElement extends Component {
    render() {
        const {
            id, name, color,
        } = this.props;
        return (
            <View key={id}>
                <Text>{name}</Text>
                <View
                    style={{
                        backgroundColor: color,
                        width: 15,
                        height: 10,
                    }}
                />

            </View>
        );
    }
}

ListElement.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ListElement;
