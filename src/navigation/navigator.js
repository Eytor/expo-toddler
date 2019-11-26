import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../boards/index';
import BoardItem from '../boardItem/index';
import Tasks from '../Tasks/index';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Boards,
        },
        Board: {
            screen: BoardItem,
        },
        Tasks: {
            screen: Tasks,
        },
    },
    {
        initialRouteName: 'Home',
    },
);

export default AppNavigator;
