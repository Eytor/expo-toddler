import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as data from '../../db/data.json';
import ListElement from '../components/listElement';

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
        const list = this.state.lists.map((element, index, array) => (
            <ListElement key={element.id} id={element.id} name={element.name} color={element.color} index={index} length={array.length} navigation={this.props.navigation} />
        ));
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Lists</Text>
                <View style={styles.listItemContainer}>{list}</View>
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
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    listItemContainer: {
        backgroundColor: '#fff',
        padding: 15,
    },
    listItemWrapper: {
        padding: 8,
        paddingLeft: 15,
        borderLeftWidth: 3,
    },
    listItemHeading: {
        fontSize: 16,
        color: '#303030',
        fontWeight: 'bold',
    },
});
BoardItem.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default BoardItem;
