import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import * as Linking from "expo-linking";

class WhoToCall extends Component {
  constructor() {
    super();

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
  }

  goToLearningModules() {
    this.props.navigation.navigate("LearningModulesScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Who to Call"
          backArrow={true}
          function={this.goToLearningModules}
          small={true}
        />

        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "77%", marginBottom: 5 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Call the Endocrinology and Metabolism clinic:
              {"\n"} - To book, cancel, or modify an appointment
              {"\n"} - To ask about physician availability
              {"\n"} - To talk with a secretary about paperwork to be filled or
              signed
              {"\n"} - To know how to get in touch with your endocrinologist for
              any other issue. Secretaries answer the phone from Monday to
              Friday between 8 am to 4 pm. The phone number of the Glen site
              clinic is{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+15149348224");
                }}
              >
                514-934-8224
              </Text>
              . The phone number for the Montreal General Hospital clinic is{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+1514934193444760");
                }}
              >
                514-934-1934, extension 44760.
              </Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Call one of the diabetes nurse educators if you need any other
              help with your diabetes care. They answer the phone from Monday to
              Friday between 8 am to 4 pm. Call the McGill University Health
              Centre at{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+15149341934");
                }}
              >
                514-934-1934
              </Text>{" "}
              and use the extension numbers below.
              {"\n"} - Maria D'Errico: 38006
              {"\n"} - Panhavat Huor: 38004
              {"\n"} - Other diabetes personnel [ Name ] [contact]
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              For any technical or delivery support for your diabetes
              technology, you should call the support hotline of the company.
              {"\n"} - OmniPod:{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+18005913455");
                }}
              >
                1-800-591-3455
              </Text>
              {"\n"} - Medtronic:{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+18002844416");
                }}
              >
                1-800-284-4416
              </Text>
              {"\n"} - Tandem Diabetes:{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+18778016901");
                }}
              >
                1-877-801-6901
              </Text>
              {"\n"} - Abbott/Freestyle Libre:{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+18882058296");
                }}
              >
                1-888-205-8296
              </Text>
              {"\n"} - Dexcom:{" "}
              <Text
                onPress={() => {
                  Linking.openURL("tel:+18448321810");
                }}
              >
                1-844-832-1810
              </Text>
              {"\n"} - Other company: [insert name ] [insert phone number]
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              For your prescription renewals and refills, call your pharmacy.
              {"\n"} - Pharmacy name [__]
              {"\n"} - Pharmacy number: [ ]
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              In the event of something urgent that cannot wait for office hours
              that is related to your diabetes, and you are unsure whether or
              not to go to the emergency department, you can call the McGill
              University Health Centre and ask switchboard for the
              endocrinologist on call. This is for urgent cases only. Make sure
              you have your hospital card ready when you call.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Other important contacts:
              {"\n"} - Type manually [name ] [contact]
              {"\n"} - Take photo]
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default WhoToCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  fieldsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 5,
    margin: 5,
    minWidth: "92%",
    maxWidth: "92%",
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.grey,
  },
  text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
  },
});
