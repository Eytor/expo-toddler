import React, { Component } from 'react';
import {
    Text, View, Image, TouchableOpacity, StyleSheet
} from 'react-native';

class BoardElement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {id, name, description, thumbnailPhoto} = this.props;
        return (
            <View style={styles.boardListItem}>
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
                    onPress={() => this.props.removeItem(id)}
                    style={styles.deleteWrapper}
                >
                    <View style={styles.arrowTop}></View>
                    <View style={styles.arrowBot}></View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.openEdit(id, name, description, thumbnailPhoto)}
                    style={styles.edit}
                >
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

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
        flexDirection: 'row'
    },
    desc:{
        flex: 1,
        paddingLeft: 15,
    },
    imageWrapper:{
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
        position: "absolute",
        width: 2,
        height: '100%',
        top: 0,
        left: 0,
        transform: [{ rotate: '45deg' }],
        backgroundColor: '#303030',
    },
    arrowBot: {
        position: "absolute",
        width: 2,
        height: '100%',
        bottom: 0,
        left: 0,
        transform: [{ rotate: '-45deg' }],
        backgroundColor: '#303030',
    },
    editWrapper:{
        marginTop: 10,
    },
    editText:{
        textAlign: 'right',

    }

});

export default BoardElement;
