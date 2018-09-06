import React, { Component } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {register} from './actions/index'

class FormRegistrasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      birth_place: "",
      city: "",
      phone: ""
    };
  }

  sendDataUser = () => {
    const { name, gender, birth_place, city, phone } = this.state;
    this.props.dispatch(register(name, gender, birth_place, city, phone));
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Nama"
          onChangeText={txt => this.setState({ name: txt })}
        />
        <TextInput
          placeholder="Gender"
          onChangeText={txt => this.setState({ gender: txt })}
        />
        <TextInput
          placeholder="Birth Place"
          onChangeText={txt => this.setState({ birth_place: txt })}
        />
        <TextInput
          placeholder="City"
          onChangeText={txt => this.setState({ city: txt })}
        />
        <TextInput
          placeholder="Phone"
          onChangeText={txt => this.setState({ phone: txt })}
        />
        <TouchableOpacity onPress={() => this.sendDataUser()}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <Text>{`Name: ${this.props.name}`}</Text>
        <Text>{`Gender: ${this.props.gender}`}</Text>
        <Text>{`Birth Place: ${this.props.birth_place}`}</Text>
        <Text>{`City: ${this.props.city}`}</Text>
        <Text>{`Phone Number: ${this.props.phone}`}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.register.name,
    gender: state.register.gender,
    birth_place: state.register.birth_place,
    city: state.register.city,
    phone: state.register.phone
  };
};
export default connect(mapStateToProps)(FormRegistrasi);
