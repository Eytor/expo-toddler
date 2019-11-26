import React from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';

const Task = (props) => {
    const {
        id, isFinished, name, description, openEdit, removeTask,
    } = props;
    return (
        <View key={id}>
            <Text style={styles.taskHeading}>{name}</Text>
            <View style={[styles.contentWrapper, isFinished ? { borderColor: '#97CC04' } : { borderColor: '#D62828' }]}>
                <TouchableOpacity
                    onPress={() => removeTask(id)}
                    style={styles.deleteWrapper}
                >
                    <View style={styles.arrowTop} />
                    <View style={styles.arrowBot} />
                </TouchableOpacity>
                <Text style={styles.text}>{description}</Text>
                <View style={styles.edit}>
                    <TouchableOpacity
                        onPress={() => openEdit(id, name, description, isFinished)}
                    >
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('../../assets/cogwheel.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentWrapper: {
        padding: 15,
        paddingRight: 30,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderLeftWidth: 5,
        minHeight: 75,
    },
    taskHeading: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        color: '#303030',
    },
    deleteWrapper: {
        position: 'absolute',
        right: 0,
        top: 10,
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
        position: 'absolute',
        right: 5,
        bottom: 10,
    },
});

Task.propTypes = {
    id: PropTypes.number.isRequired,
    isFinished: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    openEdit: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default Task;
