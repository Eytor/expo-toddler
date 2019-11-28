import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CloseArrow.styles';

const CloseArrow = ({ closeFunction, width, height }) => (
    <View>
        <TouchableOpacity
            onPress={() => closeFunction()}
            style={[styles.deleteWrapper, { width, height }]}
        >
            <View style={styles.arrowTop} />
            <View style={styles.arrowBot} />
        </TouchableOpacity>
    </View>
);

CloseArrow.propTypes = {
    closeFunction: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

CloseArrow.defaultProps = {
    width: 15,
    height: 15,
};

export default CloseArrow;
