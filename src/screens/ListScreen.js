import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import * as data from '../../db/data.json';
import ListElement from '../components/listElement';
import ListForm from '../components/Forms/ListForm';

class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.addToData = this.addToData.bind(this);
        this.editItem = this.editItem.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.clearForm = this.clearForm.bind(this);
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

    addToData(name, color) {
        const newLists = [...this.state.lists];
        const newId = data.lists[data.lists.length - 1].id + 1;
        const newList = {
            id: newId,
            name,
            color,
            boardId: this.state.boardId,
        };
        newLists.push(newList);
        this.setState({
            lists: newLists,
            name: null,
            color: null,
            modalVisible: false,
        });
        data.lists.push(newList);
    }

    async removeItem(id) {
        let newList = [...this.state.lists];
        // TODO: remove item by ID
        const index = newList.findIndex((i) => i.id === id);
        newList = await [
            ...newList.slice(0, index).concat(...newList.slice(index + 1)),
        ];
        this.setState({
            lists: newList,
        });
        const newIndex = data.lists.findIndex((i) => i.id === id);
        data.lists = [
            ...data.lists
                .slice(0, newIndex)
                .concat(...data.lists.slice(newIndex + 1)),
        ];
    }

    editItem(name, color) {
        const newLists = [...this.state.lists];
        const index = newLists.findIndex((i) => i.id === this.state.workingId);
        const newList = {
            id: this.state.workingId,
            name,
            color,
            boardId: this.state.boardId,
        };
        newLists[index] = newList;
        this.setState({
            lists: newLists,
            modalVisible: false,
        });
        data.lists[
            data.lists.findIndex((i) => i.id === this.state.workingId)
        ] = newList;
        this.clearForm();
    }

    openEdit(id, name, color) {
        this.setState({
            modalVisible: true,
            edit: true,
            workingId: id,
            name,
            color,
        });
    }

    clearForm() {
        this.setState({
            workingId: null,
            modalVisible: false,
            edit: false,
            name: null,
            color: null,
        });
    }

    render() {
        const list = this.state.lists.map((element, index, array) => (
            <ListElement
                key={element.id}
                id={element.id}
                name={element.name}
                color={element.color}
                boardId={element.boardId}
                index={index}
                length={array.length}
                openEdit={this.openEdit}
                removeItem={this.removeItem}
                navigation={this.props.navigation}
            />
        ));
        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <ListForm
                            name={this.state.name}
                            color={this.state.color}
                            edit={this.state.edit}
                            addToData={this.addToData}
                            editItem={this.editItem}
                            clearForm={this.clearForm}
                        />
                    </Modal>
                    <Text style={styles.heading}>Lists</Text>
                    <ScrollView style={styles.listItemContainer}>{list}</ScrollView>
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
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    listItemContainer: {
        padding: 15,
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
});
ListScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ListScreen;
