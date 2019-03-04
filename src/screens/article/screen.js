import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import { View } from "react-native"
import { Body, Title } from "./components"
import { screens } from "../../constants"

export default class ArticleScreen extends React.PureComponent {
  static navigationOptions = {
    headerTitle: "Article"
  }
  render() {
    const { title, body } = this.props
    return (
      <ScrollView>
        <View>
          <Title text={title} />
          <Body text={body} />
        </View>
      </ScrollView>
    )
  }
}
