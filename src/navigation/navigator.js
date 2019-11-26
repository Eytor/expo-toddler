
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../boards/index';


const AppNavigator = createStackNavigator({
    Home: {
        screen: Boards,
    },
});

export default AppNavigator;
