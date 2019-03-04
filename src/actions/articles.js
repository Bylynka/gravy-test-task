import actions from "./"
import { getArticles as getArticlesRequest } from "../api"

export const getArticles = () => async (dispatch, getState) => {
  dispatch(actions.articles.fetch.request())
  try {
    const response = await getArticlesRequest()
    dispatch(actions.articles.fetch.complete(response.data))
  } catch (e) {
    dispatch(actions.articles.fetch.error("Error. Try Later"))
  }
}

export const searchArticles = search => actions.articles.search(search)
