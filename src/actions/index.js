import { createActions } from "redux-actions"

export default createActions({
  articles: {
    fetch: {
      request: x => x,
      complete: x => x,
      error: x => x
    },
    search: x => x
  }
})
