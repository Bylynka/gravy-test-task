import React from "react"
import { Provider } from "react-redux"
import { SafeAreaView } from "react-native"

import { createAppContainer } from "react-navigation"
import store from "./store"
import AppNavigator from "./navigator"

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </SafeAreaView>
    )
  }
}
