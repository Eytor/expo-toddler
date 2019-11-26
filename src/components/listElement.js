import React from 'react';
import PropTypes from 'prop-types';
import {
    Text, View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';

const ListElement = (props) => {
    const {
        id, name, color, index, length, navigation, openEdit, boardId, removeItem,
    } = props;
    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.listItemWrapper,
                    { borderColor: color },
                    index === length - 1
                        ? { marginBottom: 0 }
                        : { marginBottom: 15 },
                ]}
                onPress={() => navigation.navigate('Tasks', { id })}
            >
                <Text style={styles.listItemHeading}>{name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => openEdit(id, name, color, boardId)}
            >
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/cogwheel.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => removeItem(id)}
                style={styles.deleteWrapper}
            >
                <View style={styles.arrowTop} />
                <View style={styles.arrowBot} />
            </TouchableOpacity>

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
    deleteWrapper: {
        position: 'absolute',
        right: 5,
        top: 15,
        width: 15,
        height: 15,
    },
    arrowTop: {
        position: 'absolute',
        width: 2,
        height: '100%',
        top: 0,
        left: 0,
        transform: [{ rotate: '45deg' }],
        backgroundColor: '#303030',
    },
    arrowBot: {
        position: 'absolute',
        width: 2,
        height: '100%',
        bottom: 0,
        left: 0,
        transform: [{ rotate: '-45deg' }],
        backgroundColor: '#303030',
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
    color: PropTypes.string,
    boardId: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    navigation: PropTypes.object.isRequired,
    openEdit: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
};

ListElement.defaultProps = {
    color: '#fff',
};

export default ListElement;
