import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Modal,
    Alert,
    TextInput,
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
        const boardlist = boards.map((x) => <Text key={x.id}>{x.name}</Text>);
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Name</Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                }}
                                label="Name"
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}
                            />
                            <Text>Description</Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                }}
                                label="Description"
                                onChangeText={(description) => this.setState({ description })}
                                value={this.state.description}
                            />
                            <Text>Thumbnail Photo</Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                }}
                                label="Thumbnail Photo"
                                onChangeText={(thumbnailPhoto) => this.setState({ thumbnailPhoto })}
                                value={this.state.thumbnailPhoto}
                            />
                            <Button
                                disabled={
                                    !this.state.name
                                    || !this.state.thumbnailPhoto
                                }
                                onPress={this.addToData}
                                title="add data"
                            />
                        </View>
                    </View>
                </Modal>
                <Text>List of boards:</Text>
                {boardlist}
                <Button
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                    title="add to list"
                />
            </View>
        );
    }
}
export default Boards;
