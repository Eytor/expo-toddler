import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/navigator';
import Boards from './src/boards/index';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Boards />
//         </View>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
