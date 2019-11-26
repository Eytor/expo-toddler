import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Modal, TextInput, Button, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import * as data from '../../db/data.json';
import ListElement from '../components/listElement';

class BoardItem extends Component {
    constructor(props) {
        super(props);
        this.addToData = this.addToData.bind(this);
        this.state = {
            lists: [],
            workingId: null,
            modalVisible: false,
            edit: false,
            name: null,
            color: null,
            boardId: null,
        };
    }

    componentWillMount() {
        const { id } = this.props.navigation.state.params;
        const list = data.lists.filter((element) => element.boardId === id);
        this.setState({ lists: list, boardId: id });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    addToData() {
        const newLists = [...this.state.lists];
        const newId = data.lists[data.lists.length - 1].id + 1;
        console.log(this.state);
        const newList = {
            id: newId,
            name: this.state.name,
            color: this.state.color,
            boardId: this.state.boardId,
        };
        newLists.push(newList);
        this.setState({
            lists: newLists,
            name: null,
            color: null,
            boardId: null,
            modalVisible: false,
        });
        data.lists.push(newList);
    }


    // componentWillUnmount() {
    //     // Líklegast óþarfi ef við manipulatum um leið og við breytum
    //     this.state.lists.map((element) => {
    //         const index = data.lists.findIndex((list) => list.id === element.id);
    //         if (index !== -1) {
    //             if (
    //                 data.lists.findIndex(
    //                     (list) => list.id === element.id
    //                         && list.name === element.name
    //                         && list.color === element.color
    //                         && list.listId === element.listId,
    //                 ) !== -1
    //             ) {
    //                 data.lists[index] = element;
    //             }
    //         } else {
    //             data.lists.push(element);
    //         }
    //     });
    // }

    render() {
        const list = this.state.lists.map((element, index, array) => (
            <ListElement
                key={element.id}
                id={element.id}
                name={element.name}
                color={element.color}
                index={index}
                length={array.length}
                navigation={this.props.navigation}
            />
        ));
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.modalWrapper}>
                        {this.state.edit ? (
                            <Text style={styles.heading}>Edit item</Text>
                        ) : (
                            <Text style={styles.heading}>Add new item</Text>
                        )}
                        <View>
                            <TouchableOpacity
                                onPress={() => this.clearForm()}
                            >
                                <Text style={styles.btnCloseModal}>x</Text>
                            </TouchableOpacity>
                            <View style={styles.formGroup}>
                                <Text style={styles.modalLabel}>Name</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    label="Name"
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.modalLabel}>
                                    Color
                                </Text>
                                <TextInput
                                    style={styles.modalInput}
                                    label="Color"
                                    onChangeText={(color) => this.setState({ color })}
                                    value={this.state.color}
                                />
                            </View>
                        </View>
                    </View>
                    <Button
                        disabled={
                            !this.state.name || !this.state.color
                        }
                        onPress={
                            this.state.edit ? this.editItem : this.addToData
                        }
                        style={styles.btn}
                        title="Save"
                    />
                </Modal>
                <Text style={styles.heading}>Lists</Text>
                <View style={styles.listItemContainer}>{list}</View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <Text style={styles.btnText}>Add item!</Text>
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
