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
import QuestionDescription from "../components/QuestionDescription"

class Question3screen extends Component {
  constructor() {
    super();
    this.state = {
      
    };

    //functions
    this.backFunction = this.backFunction.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
    
  }

  backFunction() {
    this.props.navigation.navigate("Question2screen");
  }

  goToNextScreen() {
    this.props.navigation.navigate("Question1screen");
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          title="T1D App"
          backArrow={true}
          function={this.backFunction}
        ></Header>
        <QuestionDescription title="Are you on injections or pump?"></QuestionDescription>
          <View style={styles.fieldsContainer}>
            <Greenbutton title="Injections" onPress={this.goToEmailScreen}></Greenbutton>
            <Greenbutton title="Pump" onPress={this.goToEmailScreen}></Greenbutton>
          </View>
          <View style={styles.fieldsContainer}><Greenbutton title="Next" onPress={this.goToNextScreen}></Greenbutton></View>

      </View>
    );
  }
}

export default Question3screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },

  fieldsContainer: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

