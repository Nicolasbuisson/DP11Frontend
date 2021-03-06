import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import "firebase/auth";
import Header from "../components/header";
import Footer from "../components/footer";
import colors from "../style/colors.js";
import Context from "../Context";

class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      english: true,
    };

    //functions
    this.goToHome = this.goToHome.bind(this);
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.goToTrack = this.goToTrack.bind(this);
    this.goToReminders = this.goToReminders.bind(this);
    this.goToMore = this.goToMore.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
  }
  static contextType = Context;

  goToHome() {
    this.context.setView("DashboardScreen");
  }

  goToReminders() {
    this.context.setView("RemindersScreen");
  }

  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  goToMore() {
    this.context.setView("MoreScreen");
  }

  goToTrack() {
    this.context.setView("TrackingScreen");
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentDidMount() {
    this.setState({
      english: this.context.user?.language === "French" ? false : true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="T1D Tutor" />
        <View style={styles.fieldsContainer}>
          <Image
            source={require("../assets/logoCircle.png")}
            style={styles.logo}
          />
          {this.state.english && <Text style={styles.title}>Welcome</Text>}
          {!this.state.english && <Text style={styles.title}>Bienvenue</Text>}
        </View>
        <Footer></Footer>
      </View>
    );
  }
}

export default DashboardScreen;

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
  logo: {
    height: 64,
    width: 64,
    margin: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    margin: 15,
    color: colors.primary,
    // textDecorationStyle: "",
  },
});
