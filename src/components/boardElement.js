import React from 'react';
import PropTypes from 'prop-types';
import {
    Text, View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';

const BoardElement = (props) => {
    const {
        id, name, description, thumbnailPhoto, removeItem, openEdit, navigation,
    } = props;
    return (
        <TouchableOpacity
            style={styles.boardListItem}
            onPress={() => navigation.navigate('Board', { id })}
        >
            <Text style={styles.heading}>{name}</Text>
            <View style={styles.contentWrapper}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{ uri: thumbnailPhoto }}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.desc}>
                    <Text>{description}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => removeItem(id)}
                style={styles.deleteWrapper}
            >
                <View style={styles.arrowTop} />
                <View style={styles.arrowBot} />
            </TouchableOpacity>
            <View style={styles.edit}>
                <TouchableOpacity
                    onPress={() => openEdit(id, name, description, thumbnailPhoto)}
                >
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../../assets/cogwheel.png')}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        color: '#303030',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    boardListItem: {
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
        marginBottom: 30,
        position: 'relative',
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    desc: {
        flex: 1,
        paddingLeft: 15,
    },
    imageWrapper: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        minHeight: 100,
    },
    boardListItemText: {
        fontSize: 16,
        color: '#303030',
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
    edit: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

});

BoardElement.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired,
    openEdit: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
};

BoardElement.defaultProps = {
    description: '',
};

export default BoardElement;
