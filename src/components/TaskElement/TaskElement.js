import React from 'react';
import {
    View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './TaskElement.styles';
import CloseArrow from '../CloseArrow/CloseArrow';

const Task = ({
    id,
    isFinished,
    name,
    description,
    openEdit,
    removeTask,
}) => (
    <View key={id}>
        <Text style={styles.taskHeading}>{name}</Text>
        <View style={[styles.contentWrapper, isFinished ? { borderColor: '#97CC04' } : { borderColor: '#D62828' }]}>
            <CloseArrow closeFunction={() => removeTask(id)} right={-20} top={0} />
            <Text style={styles.text}>{description}</Text>
            <View style={styles.edit}>
                <TouchableOpacity
                    onPress={() => openEdit(id, name, description, isFinished)}
                >
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../../resources/cogwheel.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

Task.propTypes = {
    id: PropTypes.number.isRequired,
    isFinished: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    openEdit: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default Task;
