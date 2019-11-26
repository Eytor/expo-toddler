import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as data from '../../db/data.json';

class BoardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
    }

    componentWillMount() {
        const { id } = this.props.navigation.state.params;
        var list = data.lists.filter((element) => element.boardId === id);
        this.setState({lists: list});
    }

    render() {
        var list = this.state.lists.map((element) => {
            return (
                <View key={element.id}>
                <Text>{element.name}</Text>
                <View style={{backgroundColor: element.color, width: 15, height: 10}}></View>
                <Text>{element.boardId}</Text>
                </View>
            );
        })
        return (
            <View>
                {list}
            </View>
        );
    }
}

export default BoardItem;
