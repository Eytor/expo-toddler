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
        width: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItemHeading: {
        fontSize: 16,
        color: '#303030',
        fontWeight: 'bold',
    },
});
