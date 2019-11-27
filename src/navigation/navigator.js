import { createStackNavigator } from 'react-navigation-stack';
import BoardScreen from '../screens/BoardScreen';
import ListScreen from '../screens/ListScreen';
import TaskScreen from '../screens/TaskScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: BoardScreen,
        },
        Board: {
            screen: ListScreen,
        },
        Tasks: {
            screen: TaskScreen,
        },
    },
    {
        initialRouteName: 'Home',
    },
);

export default AppNavigator;
