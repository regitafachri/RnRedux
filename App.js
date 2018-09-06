/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import Setup from "./src/Setup";
import Animal from "./src/Animal";
import Regiser from "./src/FormRegistrasi";
import FormRegistrasi from "./src/FormRegistrasi";
import SimpleApi from "./src/SimpleApi";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SimpleApi />
      </Provider>
    );
  }
}

export default App;
