import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Modal,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import * as data from '../../db/data.json';
import BoardElement from '../components/boardElement';

class Boards extends Component {
    constructor(props) {
        super(props);
        this.addToData = this.addToData.bind(this);
        this.editItem = this.editItem.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.state = {
            boards: data.boards,
            modalVisible: false,
            edit: false,
            workingId: null,
            name: null,
            description: null,
            thumbnailPhoto: null,
        };
    }

    // eslint-disable-next-line react/sort-comp
    addToData() {
        const newBoard = [...this.state.boards];
        const newId = newBoard[newBoard.length - 1].id + 1;
        newBoard.push({
            id: newId,
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

    editItem() {
        const newBoard = [...this.state.boards];
        const index = newBoard.findIndex((i) => i.id === this.state.workingId);
        newBoard[index] = {
            id: this.state.workingId,
            name: this.state.name,
            description: this.state.description,
            thumbnailPhoto: this.state.thumbnailPhoto,
        };
        this.setState({
            boards: newBoard,
            modalVisible: false,
        });
        this.clearForm();
    }

    openEdit(id, name, description, thumbnailPhoto) {
        this.setState({
            modalVisible: true,
            edit: true,
            workingId: id,
            name,
            description,
            thumbnailPhoto,
        });
    }

    async removeItem(id) {
        let newBoard = [...this.state.boards];
        // TODO: remove item by ID
        const index = newBoard.findIndex((i) => i.id === id);
        newBoard = await [
            ...newBoard.slice(0, index).concat(...newBoard.slice(index + 1)),
        ];
        this.setState({ boards: newBoard });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    clearForm() {
        this.setState({
            edit: false,
            name: null,
            workingId: null,
            description: null,
            thumbnailPhoto: null,
            modalVisible: false,
        });
    }

    render() {
        const { boards } = this.state;
        const boardlist = boards.map((element) => (
            <BoardElement
                key={element.id}
                id={element.id}
                name={element.name}
                description={element.description}
                thumbnailPhoto={element.thumbnailPhoto}
                removeItem={this.removeItem}
                openEdit={this.openEdit}
                navigation={this.props.navigation}
            />
        ));

        return (
            <View style={{ flex: 1, width: '100%' }}>
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
                            <TouchableOpacity onPress={() => this.clearForm()}>
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
                                    Description
                                </Text>
                                <TextInput
                                    style={styles.modalInput}
                                    label="Description"
                                    onChangeText={(description) => this.setState({ description })}
                                    value={this.state.description}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.modalLabel}>
                                    Thumbnail Photo
                                </Text>
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
                            !this.state.name || !this.state.thumbnailPhoto
                        }
                        onPress={
                            this.state.edit ? this.editItem : this.addToData
                        }
                        style={styles.btn}
                        title="Save"
                    />
                </Modal>
                <View style={styles.container}>
                    <Text style={styles.heading}>Your boards</Text>
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

    modalWrapper: {
        flex: 1,
        padding: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFA400',
    },

    btnCloseModal: {
        textTransform: 'uppercase',
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
