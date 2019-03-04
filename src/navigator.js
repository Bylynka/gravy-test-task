import { createStackNavigator, createAppContainer } from "react-navigation"
import ArticlesScreen from "./screens/articles"
import ArticleScreen from "./screens/article"

import { screens } from "./constants"

export default createStackNavigator(
  {
    [screens.articles]: ArticlesScreen,
    [screens.article]: ArticleScreen
  },
  {
    initialRouteName: screens.articles
  }
)
