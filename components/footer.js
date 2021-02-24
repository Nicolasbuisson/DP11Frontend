import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../style/colors";

const Footer = (props) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={
          props.page == "home" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={props.homeFunction}
      >
        <Image source={require("../assets/iconmonstr-home-7-32.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          props.page == "track" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={props.trackFunction}
      >
        <Image source={require("../assets/iconmonstr-chart-21-32.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          props.page == "learn" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={props.learnFunction}
      >
        <Image source={require("../assets/iconmonstr-book-19-32.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          props.page == "reminder" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={props.reminderFunction}
      >
        <Image source={require("../assets/iconmonstr-bell-2-32.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          props.page == "more" ? styles.borderTopShow : styles.iconContainer
        }
        onPress={props.moreFunction}
      >
        <Image source={require("../assets/iconmonstr-menu-1-32.png")} />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    display: "flex",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: colors.grey,
    borderTopWidth: 3,
    paddingBottom: 8,
  },
  iconContainer: {
    padding: 3,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  borderTopShow: {
    borderTopColor: colors.primary,
    borderTopWidth: 3,
    padding: 3,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
  },
});
