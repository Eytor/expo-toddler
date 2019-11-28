import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
