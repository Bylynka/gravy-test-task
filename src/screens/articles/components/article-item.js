import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Highlighter from "react-native-highlight-words"

export class ArticleItem extends React.PureComponent {
  onPress = () => {
    const { item, openArticle } = this.props
    openArticle(item)
  }

  render() {
    const { item: { title, body }, search } = this.props
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.root}>
            <Highlighter
              highlightStyle={styles.highlightText}
              searchWords={[search]}
              textToHighlight={title}
              style={styles.title}
            />
            <Highlighter
              highlightStyle={styles.highlightText}
              searchWords={[search]}
              textToHighlight={body}
              style={styles.body}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 24,
    paddingVertical: 12
  },
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  body: {
    fontSize: 14,
    color: "black",
    marginTop: 4
  },
  highlightText: { backgroundColor: "yellow" }
})
