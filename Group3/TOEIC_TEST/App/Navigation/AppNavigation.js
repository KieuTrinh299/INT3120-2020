import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainBody from '../Components/MainBody'
import Search from '../Components/Search'
import Meaning from '../Components/Meaning'
import LearnWord from '../Components/LearnWord'
import TestList from '../Components/TestList'
import TestBody from '../Components/TestBody'
import Test from '../Components/Test'
const AppNavigator = createStackNavigator({
        MainBody: { screen: MainBody },
        Search: { screen: Search },
        Meaning: { screen: Meaning },
        LearnWord: { screen: LearnWord },
        TestList: { screen: TestList },
        TestBody: { screen: TestBody },
        Test: { screen: Test },
});

export default createAppContainer(AppNavigator);