import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as data from '../../db/data.json';

class BoardItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>item</Text>
            </View>
        );
    }
}

export default BoardItem;
