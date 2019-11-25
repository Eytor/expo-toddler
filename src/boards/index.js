import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
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
        const boardlist = boards.map((x) => {
            return (
                <View style={styles.boardListItem}>
                    <Text style={styles.boardListItemText} key={x.id}>{x.name}</Text>
                </View>
            )
        });

        return (
            <View style={{flex: 1, width: '100%'}}>
                <View style={styles.container}>
                    <Text style={styles.heading}>List of boards:</Text>
                    <ScrollView>
                        {boardlist}
                    </ScrollView>

                </View>
                <TouchableOpacity style={styles.btn} onPress={this.addToData}>
                    <Text style={styles.btnText}>Add item!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A6FB',
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
    btnText:{
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
    }
})

export default Boards;
