import React from 'react';
import { StyleSheet, View } from 'react-native';
import Boards from './src/boards/index';

export default function App() {
    return (
        <View style={styles.container}>
            <Boards />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
