import React from 'react';
import PropTypes from 'prop-types';
import {
    Text, View, TouchableOpacity, Image,
} from 'react-native';
import styles from './ListElement.styles';

const ListElement = ({id, name, color, index, length, navigation, openEdit, boardId, removeItem}) => {
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
                                source={require('../../resources/cogwheel.png')}
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
