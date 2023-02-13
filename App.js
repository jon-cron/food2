import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/Screens/ResultsShowScreen.js";
import SearchScreen from "./src/Screens/SearchScreen.js";


const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultsShowScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});


export default createAppContainer(navigator);