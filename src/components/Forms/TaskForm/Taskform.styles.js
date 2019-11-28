import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    formGroup: {
        marginBottom: 15,
    },
    heading: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 10,
    },
    input: {
        borderWidth: 0,
        borderColor: '#303030',
        borderRadius: 25,
        backgroundColor: '#fff',
        padding: 8,
        paddingLeft: 15,
        marginTop: 5,
    },
    pickerWrapper: {
        borderRadius: 25,
        overflow: 'hidden',
    },
    picker: {
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    wrapper: {
        flex: 1,
        padding: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFA400',
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 50,
        width: '100%',
        backgroundColor: '#4CB944',
    },
    btnCloseModal: {
        textTransform: 'uppercase',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    errorInput: {
        borderWidth: 2,
        borderColor: '#D62828',
    },
});
