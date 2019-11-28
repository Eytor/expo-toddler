import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import styles from './FilterElement.styles';

const FilterElement = ({ filter, label }) => (
    <TextInput placeholder={`Search ${label}`} style={styles.input} onChangeText={(text) => filter(text)} />
);

FilterElement.propTypes = {
    filter: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default FilterElement;
