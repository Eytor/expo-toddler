import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import * as data from '../../../resources/data.json';
import ListElement from '../../ListElement/ListElement';
import ListForm from '../../Forms/ListForm/ListForm';
import styles from './ListScreen.styles';
import FilterElement from '../../FilterElement/FilterElement';

class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.addToData = this.addToData.bind(this);
        this.editItem = this.editItem.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.filterLists = this.filterLists.bind(this);
        this.state = {
            lists: [],
            workingId: null,
            filteredLists: [],
            filterString: '',
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
        this.setState({ lists: list, boardId: id, filteredLists: list });
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
        },
        () => this.filterLists(this.state.filterString));
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
        },
        () => this.filterLists(this.state.filterString));
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
        },
        () => this.filterLists(this.state.filterString));
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

    filterLists(text) {
        const newLists = [...this.state.lists].filter(
            (element) => element.name.toLowerCase().includes(text.toLowerCase())
                || element.color.toLowerCase().includes(text.toLowerCase()),
        );
        this.setState({ filteredLists: newLists, filterString: text });
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
        const { filteredLists } = this.state;
        const list = filteredLists.map((element, index, array) => (
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
                        onRequestClose={() => this.clearForm()}
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
                    <FilterElement filter={this.filterLists} />
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

ListScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default ListScreen;
