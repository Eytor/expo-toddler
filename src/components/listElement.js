import React from 'react';
import PropTypes from 'prop-types';
import {
    Text, View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';

const ListElement = (props) => {
    const {
        id,
        name,
        color,
        index,
        length,
        navigation,
        openEdit,
        boardId,
        removeItem,
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
                onPress={() => navigation.navigate('Tasks', { id, title: name, boardId })}
            >
                <Text style={styles.listItemHeading}>{name}</Text>
                <View style={styles.buttonWrapper}>
                    <View style={styles.edit}>
                        <TouchableOpacity
                            onPress={() => openEdit(id, name, color, boardId)}
                        >
                            <Image
                                style={{ width: 15, height: 15 }}
                                source={require('../../assets/cogwheel.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => removeItem(id)}
                        style={styles.deleteWrapper}
                    >
                        <View style={styles.arrowTop} />
                        <View style={styles.arrowBot} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    listItemWrapper: {
        padding: 15,
        paddingLeft: 15,
        borderLeftWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonWrapper: {
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    deleteWrapper: {
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
