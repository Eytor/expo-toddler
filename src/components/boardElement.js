import React, { Component } from 'react';
import {
    Text, View, Image, TouchableOpacity,
} from 'react-native';

class BoardElement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.boardListItem} key={this.props.id}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: this.props.thumbnailPhoto }}
                />
                <Text style={styles.boardListItemText}>{this.props.name}</Text>
                <Text>{this.props.description}</Text>
                <TouchableOpacity
                    onPress={() => this.props.removeItem(this.props.id)}
                >
                    <Text>delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
