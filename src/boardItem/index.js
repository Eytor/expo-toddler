import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as data from '../../db/data.json';

class BoardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
        };
    }

    componentWillMount() {
        const { id } = this.props.navigation.state.params;
        const list = data.lists.filter((element) => element.boardId === id);
        this.setState({ lists: list });
    }

    render() {
        const list = this.state.lists.map((element) => (
            <View key={element.id}>
                <Text>{element.name}</Text>
                <View
                    style={{
                        backgroundColor: element.color,
                        width: 15,
                        height: 10,
                    }}
                />
                <Text>{element.boardId}</Text>
            </View>
        ));
        return <View>{list}</View>;
    }
}

BoardItem.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default BoardItem;
