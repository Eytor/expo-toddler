import { createStackNavigator } from 'react-navigation-stack';
import BoardScreen from '../components/screens/BoardScreen/BoardScreen';
import ListScreen from '../components/screens/ListScreen/ListScreen';
import TaskScreen from '../components/screens/TaskScreen/TaskScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: BoardScreen,
            navigationOptions: () => ({
                headerTitle: 'Your boards',
                headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: '#FFA400',
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    elevation: 0,
                },
            }),
        },
        Board: {
            screen: ListScreen,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: params.title,
                    headerTitleStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: '#FFA400',
                        shadowColor: 'transparent',
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        elevation: 0,
                    },
                    headerTintColor: '#FFF',
                };
            },
        },
        Tasks: {
            screen: TaskScreen,
            navigationOptions: ({ navigation }) => {
                const { params = {} } = navigation.state;
                return {
                    headerTitle: params.title,
                    headerTitleStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: '#FFA400',
                        shadowColor: 'transparent',
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        elevation: 0,
                    },
                    headerTintColor: '#FFF',
                };
            },
        },
    },
    {
        initialRouteName: 'Home',
    },
);

export default AppNavigator;
