import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from './FilterElement.styles';

class FilterElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // filterString: null,
        };
    }

    render() {
        const { filter } = this.props;
        return <TextInput placeholder="Search here" style={styles.input} onChangeText={(text) => filter(text)} />;
    }
}

FilterElement.propTypes = {
    filter: PropTypes.func.isRequired,
};

export default FilterElement;
