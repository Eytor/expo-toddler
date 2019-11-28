import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        marginBottom: 15,
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
    edit: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

});
