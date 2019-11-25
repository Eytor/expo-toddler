import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as data from '../../db/data.json';

class Boards extends Component {
    constructor(props) {
        super(props);
        this.addToData = this.addToData.bind(this);
        this.state = {
            boards: data.boards,
        };
    }

    addToData() {
        const newBoard = [...this.state.boards];
        console.log(newBoard);
        newBoard.push({
            id: 4,
            name: 'Trip to the Iceland!',
            thumbnailPhoto: 'https://s25743.pcdn.co/wp-content/uploads/2018/05/points-of-interest-where-to-go-and-places-to-visit-in-the-netherlands-featured-1400x735.jpg',
        });
        this.setState({ boards: newBoard });
    }

    render() {
        const { boards } = this.state;
        const boardlist = boards.map((x) => <Text key={x.id}>{x.name}</Text>);
        return (
            <View>
                <Text>List of boards:</Text>
                {boardlist}
                <Button onPress={this.addToData} title="add data" />
            </View>
        );
    }
}
export default Boards;
