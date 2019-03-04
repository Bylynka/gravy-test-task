import { handleActions } from "redux-actions"
import actions from "../actions"

const initialState = {
  isFetching: false,
  items: [],
  search: "",
  error: null
}

export default handleActions(
  {
    [actions.articles.fetch.request]: state => ({
      ...state,
      isFetching: true,
      error: null
    }),

    [actions.articles.fetch.complete]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload
    }),

    [actions.articles.fetch.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload
    }),
    [actions.articles.search]: (state, { payload }) => ({
      ...state,
      search: payload
    })
  },
  initialState
)
