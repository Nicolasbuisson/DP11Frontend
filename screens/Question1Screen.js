import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase";
import dbh from "../firebase";
import colors from "../style/colors.js";
import Header from "../components/header";
import Greenbutton from "../components/greenButton"
import Dropdown from 'react-dropdown';

class Question1screen extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      diagnosisdate: "",
      pregnant: "",
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
    
  }

  backFunction() {
    this.props.navigation.navigate("LoginScreen");
  }

  goToNextScreen() {
    this.props.navigation.navigate("Question2screen");
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <View style={styles.fieldsContainer}>
          <Text style={styles.field}>Age</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => this.setState({ age: text })}
            value={this.state.age}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>Date of diagnosis with T1D</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ diagnosisdate: text })}
            value={this.state.diagnosisdate}
            style={styles.input}
          ></TextInput>
          <Text style={styles.field}>Is it possible for you to get pregnant?</Text>
          <TextInput
            autoCorrect={false}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ pregnant: text })}
            value={this.state.pregnant}
            style={styles.input}
          ></TextInput>
         
          {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
          
          {/* <TextInput list="yes_no" type="text" style={styles.input}>
            <datalist id="yes_no">
              <option value="Yes"/>
              <option value="No"/>
            </datalist>
          </TextInput> */}
          <Greenbutton title="Next" onPress={this.goToNextScreen}></Greenbutton>
        </View>
      </View>
    );
  }
}

export default Question1screen;

const options = [
  'Yes', 'No'
];

const defaultOption = options[0];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  field: {
    fontSize: 20,
    color: colors.primary,
  },

  input: {
    height: 25,
    width: 300,
    borderColor: colors.grey,
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 25,
  },
});
