import React from "react"
import { FlatList } from "react-native-gesture-handler"
import { SearchBar } from "react-native-elements"
import { View, RefreshControl } from "react-native"
import { ArticleItem, ItemSeparator } from "./components"
import { screens } from "../../constants"

export default class ArticlesScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.refresh()
  }

  refresh = () => this.props.getArticles()

  keyExtractor = item => `${item.id}`

  renderItem = ({ item }) => {
    const { search } = this.props
    return (
      <ArticleItem item={item} openArticle={this.openArticle} search={search} />
    )
  }

  renderItemSeparator = () => <ItemSeparator />

  openArticle = article => {
    const { navigation } = this.props
    navigation.navigate(screens.article, { article })
  }

  render() {
    const { items, searchArticles, search, isFetching } = this.props
    return (
      <View>
        <SearchBar
          lightTheme
          placeholder="Type Here..."
          onChangeText={searchArticles}
          value={search}
        />
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={this.refresh} />
          }
          data={items}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
        />
      </View>
    )
  }
}
