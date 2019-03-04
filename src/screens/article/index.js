import React from "react"
import { connect } from "react-redux"
import ArticleScreen from "./screen"

const mapStateToProps = (state, props) => {
  const article = props.navigation.getParam("article")
  const { title, body } = article
  return { title, body }
}

export default connect(mapStateToProps)(ArticleScreen)
