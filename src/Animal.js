import React, { Component } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";
import { animal } from "./actions/index";

class Animal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama_animal: "",
      english: ""
    };
  }

  


  sendData = () => {
    const {nama_animal, english} = this.state
    this.props.dispatch(animal(nama_animal, english));
  };

  render() {
    return (
      <View>
        <Text>{`hewan ${this.props.nama} bahasa inggrisnya adalah ${
          this.props.english
        }`}</Text>
        <TextInput
          onChangeText={txt => this.setState({ nama_animal: txt })}
          placeholder="nama"
        />
        <TextInput
          onChangeText={txt => this.setState({ english: txt })}
          placeholder="english version"
        />
        <TouchableOpacity onPress={() => this.sendData()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    nama: state.animal.nama_animal,
    english: state.animal.english_version
  };
};

export default connect(mapStateToProps)(Animal);
