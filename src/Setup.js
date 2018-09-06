/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { fetchData, getInputName } from "./actions/index";

// redux only can be aply in class / statefull component

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchData());
    // this.props.dispatch(getInputName(user_name))
  }

  sendUserName = () => {
    this.props.dispatch(getInputName());
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.props.data ? (
          <Text>{this.props.data}</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}

        <Text>{this.props.inputUser}</Text>
        <TextInput
          onChangeText={inputan_user =>
            this.setState({ username: inputan_user })
          }
          placeholder="user name"
        />
        <TouchableOpacity onPress={() => this.sendUserName()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// ngambil data dari state global
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    data: state.data.items,
    inputUser: state.input_dari_user.input_from_user, // nama harus sama kaya yg di store
    phone: ownProps.phone // props dari parent biar bedain 
  };
};

export default connect(mapStateToProps)(Setup);
