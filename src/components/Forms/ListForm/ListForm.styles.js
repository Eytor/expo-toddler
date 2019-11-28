import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 50,
        width: '100%',
    },
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalWrapper: {
        flex: 1,
        padding: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFA400',
    },
    btnCloseModal: {
        textTransform: 'uppercase',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    formGroup: {
        marginBottom: 15,
    },
    modalLabel: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 10,
    },
    modalInput: {
        borderWidth: 0,
        borderColor: '#303030',
        borderRadius: 25,
        backgroundColor: '#fff',
        padding: 8,
        paddingLeft: 15,
        marginTop: 5,
    },
    errorInput: {
        borderWidth: 2,
        borderColor: '#D62828',
    },
});
