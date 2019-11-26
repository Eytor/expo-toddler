import React from 'react';
import PropTypes from 'prop-types';
import {
    Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';

const ListElement = (props) => {
    const {
        id, name, color, index, length,
    } = props;
    return (
        <View
            style={[
                styles.listItemWrapper,
                { borderColor: color },
                index === length - 1
                    ? { marginBottom: 0 }
                    : { marginBottom: 15 },
            ]}
        >
            <Text style={styles.listItemHeading}>{name}</Text>
        </View>
    );
};

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
        backgroundColor: '#fff',
        padding: 15,
    },
    listItemWrapper: {
        padding: 8,
        paddingLeft: 15,
        borderLeftWidth: 3,
    },
    listItemHeading: {
        fontSize: 16,
        color: '#303030',
        fontWeight: 'bold',
    },
});

ListElement.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    navigation: PropTypes.object.isRequired,
};

export default ListElement;
