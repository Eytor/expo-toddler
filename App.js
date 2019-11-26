import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/navigation/navigator';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
    return <AppContainer />;
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
