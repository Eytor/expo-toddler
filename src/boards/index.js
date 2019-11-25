import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Modal,
    Alert,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import * as data from '../../db/data.json';

class Boards extends Component {
    constructor(props) {
        super(props);
        this.addToData = this.addToData.bind(this);
        this.state = {
            boards: data.boards,
            modalVisible: false,
            name: null,
            description: null,
            thumbnailPhoto: null,
        };
    }

    // eslint-disable-next-line react/sort-comp
    addToData() {
        const newBoard = [...this.state.boards];
        console.log(newBoard);
        // TODO: get new id
        newBoard.push({
            id: 4,
            name: this.state.name,
            description: this.state.description,
            thumbnailPhoto: this.state.thumbnailPhoto,
        });
        this.setState({
            boards: newBoard,
            name: null,
            description: null,
            thumbnailPhoto: null,
            modalVisible: false,
        });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { boards } = this.state;
        const boardlist = boards.map((x) => (
            <View style={styles.boardListItem}>
                <Text style={styles.boardListItemText} key={x.id}>
                    {x.name}
                </Text>
            </View>
        ));

        return (
            <View style={{ flex: 1, width: '100%' }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={styles.modalWrapper}>
                        <Text style={styles.heading}>Add new item</Text>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    name: null,
                                    description: null,
                                    thumbnailPhoto: null,
                                    modalVisible: false,
                                })}
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
                                
                                <Text style={styles.modalLabel}>Description</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    label="Description"
                                    onChangeText={(description) => this.setState({ description })}
                                    value={this.state.description}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                
                                <Text style={styles.modalLabel}>Thumbnail Photo</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    label="Thumbnail Photo"
                                    onChangeText={(thumbnailPhoto) => this.setState({ thumbnailPhoto })}
                                    value={this.state.thumbnailPhoto}
                                />
                            </View>
                        </View>
                    </View>
                    <Button
                        disabled={
                            !this.state.name
                            || !this.state.thumbnailPhoto
                        }
                        onPress={this.addToData}
                        style={styles.btn}
                        title="Add item"
                    />
                </Modal>
                <View style={styles.container}>
                    <Text style={styles.heading}>List of boards:</Text>
                    <ScrollView>{boardlist}</ScrollView>
                </View>
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
        textTransform: "uppercase",
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

export default Boards;
