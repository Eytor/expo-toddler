import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import * as data from '../../../resources/data.json';
import BoardElement from '../../BoardElement/BoardElement';
import BoardForm from '../../Forms/BoardForm/BoardForm';
import styles from './BoardScreen.styles';

class BoardScreen extends Component {
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

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    addToData(name, description, thumbnailPhoto) {
        const newBoard = [...this.state.boards];
        const newId = newBoard[newBoard.length - 1].id + 1;
        newBoard.push({
            id: newId,
            name,
            description,
            thumbnailPhoto,
        });
        this.setState({
            boards: newBoard,
            modalVisible: false,
        });
    }

    editItem(name, description, thumbnailPhoto) {
        const newBoard = [...this.state.boards];
        const index = newBoard.findIndex((i) => i.id === this.state.workingId);
        newBoard[index] = {
            id: this.state.workingId,
            name,
            description,
            thumbnailPhoto,
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
        const index = newBoard.findIndex((i) => i.id === id);
        newBoard = await [
            ...newBoard.slice(0, index).concat(...newBoard.slice(index + 1)),
        ];
        this.setState({ boards: newBoard });
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
                    onRequestClose={() => this.clearForm()}
                >
                    <BoardForm
                        name={this.state.name}
                        description={this.state.description}
                        image={this.state.thumbnailPhoto}
                        edit={this.state.edit}
                        editItem={this.editItem}
                        addToData={this.addToData}
                        clearForm={this.clearForm}
                    />
                </Modal>
                <View style={styles.container}>
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

BoardScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default BoardScreen;
