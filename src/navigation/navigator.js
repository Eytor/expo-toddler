import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../boards/index';
import BoardItem from '../boardItem/index';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Boards,
        },
        Board: {
            screen: BoardItem,
        },
    },
    {
        initialRouteName: 'Home',
    },
);

export default AppNavigator;
