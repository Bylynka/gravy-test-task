import { createSelector } from "reselect"

const articles = state => state.items || []
const search = state => state.search

export const articlesSelector = createSelector(
  [articles, search],
  (articles, search) => {
    if (!search) {
      return articles
    }
    const regex = new RegExp(`${search}`, "i")

    return articles.filter(({ title, body }) => {
      return (
        (title && title.search(regex) >= 0) || (body && body.search(regex) >= 0)
      )
    })
  }
)
