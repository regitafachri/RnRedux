import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { ambilDataSwars } from "./actions/index";

class SimpleApi extends Component {
  fetchDataDong = () => {
    this.props.dispatch(ambilDataSwars());
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.fetchDataDong()}>
          <Text>Get Data!</Text>
        </TouchableOpacity>
        {this.props.apakahLoading === true ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            <Text>{this.props.name}</Text>
            <Text>{this.props.gender}</Text>
            <Text>{this.props.hairColor}</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.DataSw.item.name,
    gender: state.DataSw.item.gender,
    hairColor: state.DataSw.item.hair_color,
    apakahLoading: state.DataSw.isFetching
  };
};

export default connect(mapStateToProps)(SimpleApi);
