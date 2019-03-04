import React from "react"
import { connect } from "react-redux"
import {
  getArticles as getArticlesAction,
  searchArticles as searchArticlesAction
} from "../../actions/articles"
import ArticlesScreen from "./screen"
import { articlesSelector } from "../../selectors"

const mapStateToProps = state => {
  const { isFetching, search } = state
  return { isFetching, items: articlesSelector(state), search }
}

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(getArticlesAction()),
  searchArticles: search => dispatch(searchArticlesAction(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesScreen)
