import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ListForm.styles';
import CloseArrow from '../../CloseArrow/CloseArrow';

class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            color: null,
        };
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            color: this.props.color,
        });
    }

    // eslint-disable-next-line class-methods-use-this
    checkColor(color) {
        if (!color) return true;
        const regex = /^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}))$/;
        return regex.test(color);
    }

    render() {
        const {
            edit,
            addToData,
            editItem,
            clearForm,
        } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.modalWrapper}>
                    <CloseArrow
                        closeFunction={() => clearForm()}
                        width={20}
                        height={20}
                        right={0}
                        top={5}
                    />
                    {edit ? (
                        <Text style={styles.heading}>Edit List</Text>
                    ) : (
                        <Text style={styles.heading}>Add New List</Text>
                    )}
                    <View>
                        <View style={styles.formGroup}>
                            <Text style={styles.modalLabel}>Name</Text>
                            <TextInput
                                style={[
                                    styles.modalInput,
                                    !this.state.name && styles.errorInput,
                                ]}
                                label="Name"
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}
                            />
                            {!this.state.name && (
                                <Text style={{ color: '#D62828' }}>
                                    Name is required
                                </Text>
                            )}
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.modalLabel}>Color</Text>
                            <TextInput
                                style={[
                                    styles.modalInput,
                                    !this.checkColor(this.state.color)
                                        && styles.errorInput,
                                ]}
                                label="Color"
                                onChangeText={(color) => this.setState({ color })}
                                value={this.state.color}
                            />
                            {!this.checkColor(this.state.color) && (
                                <Text style={{ color: '#D62828' }}>
                                    color should be on the form (#111 or #11111)
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
                <Button
                    disabled={!this.state.name || !this.checkColor(this.state.color)}
                    onPress={() => {
                        edit
                            ? editItem(this.state.name, this.state.color)
                            : addToData(this.state.name, this.state.color);
                    }}
                    style={styles.btn}
                    title="Save"
                    color="#4CB944"
                />
            </View>
        );
    }
}

ListForm.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    edit: PropTypes.bool,
    addToData: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
};

ListForm.defaultProps = {
    name: '',
    color: '',
    edit: false,
};

export default ListForm;
