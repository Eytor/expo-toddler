import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    deleteWrapper: {
        position: 'absolute',
        right: 5,
        top: 15,
        width: 15,
        height: 15,
        zIndex: 100,
    },
    arrowTop: {
        position: 'absolute',
        width: 2,
        height: '100%',
        top: 0,
        right: 0,
        transform: [{ rotate: '45deg' }],
        backgroundColor: '#303030',
    },
    arrowBot: {
        position: 'absolute',
        width: 2,
        height: '100%',
        bottom: 0,
        right: 0,
        transform: [{ rotate: '-45deg' }],
        backgroundColor: '#303030',
    },
});
