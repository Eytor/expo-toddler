import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
