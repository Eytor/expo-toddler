import React from 'react';
import PropTypes from 'prop-types';
import {
    Text, View, Image, TouchableOpacity,
} from 'react-native';
import styles from './BoardElement.styles';
import CloseArrow from '../CloseArrow/CloseArrow';

const BoardElement = ({
    id,
    name,
    description,
    thumbnailPhoto,
    removeItem,
    openEdit,
    navigation,
}) => (
    <TouchableOpacity
        style={styles.boardListItem}
        onPress={() => navigation.navigate('Board', { id, title: name })}
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
        <CloseArrow closeFunction={removeItem(id)} />
        <View style={styles.edit}>
            <TouchableOpacity
                onPress={() => openEdit(id, name, description, thumbnailPhoto)}
            >
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../resources/cogwheel.png')}
                />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);

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
