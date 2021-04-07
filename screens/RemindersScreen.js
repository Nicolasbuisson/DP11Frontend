import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../style/colors.js";
import Header from "../components/header";
import Footer from "../components/footer";
import Context from "../Context";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

class RemindersScreen extends Component {
  constructor() {
    super();
    this.state = {
      expoPushToken: "",
      notification: false,
    };
    //refs
    this.notificationListener = null;
    this.responseListener = null;

    //functions
    this.goToHome = this.goToHome.bind(this);
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.goToTrack = this.goToTrack.bind(this);
    this.goToReminders = this.goToReminders.bind(this);
    this.goToMore = this.goToMore.bind(this);
    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(
      this
    );
    this.schedulePushNotification = this.schedulePushNotification.bind(this);
    this.cancelAllNotifications = this.cancelAllNotifications.bind(this);
    this.goToPrescriptionReminder = this.goToPrescriptionReminder.bind(this);
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

  goToPrescriptionReminder() {
    this.context.setView("PrescriptionReminder");
  }

  registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return token;
  };

  schedulePushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: {
        seconds: 3,
        //to make it repeat follow this template
        //seconds: 60 * 1,
        //repeats: true,
      },
    });
  };

  cancelAllNotifications = async () => {
    Notifications.cancelAllScheduledNotificationsAsync();
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync().then((token) => {
      console.log(token);
      this.setState({ expoPushToken: token });
    });

    this.notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        this.setState({ notification: notification });
      }
    );

    this.responseListener = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(this.notificationListener);
      Notifications.removeNotificationSubscription(this.responseListener);
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Reminders"></Header>
        <View style={styles.topParagraph}>
          <Text style={styles.text}>
            Here are some reminders you can set to have notifications for
            day-to-day items and important dates.{"\n"}With diabetes, there's a
            lot of things to remember. This tool is here to help!
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "46%" }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.touchable}
            onPress={this.schedulePushNotification}
          >
            <Text>test push notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this.cancelAllNotifications}
          >
            <Text>cancel all notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={this.goToPrescriptionReminder}
          >
            <Text>Prescription</Text>
          </TouchableOpacity>
        </ScrollView>
        <Footer
          page="reminder"
          homeFunction={this.goToHome}
          trackFunction={this.goToTrack}
          learnFunction={this.goToLearningModules}
          moreFunction={this.goToMore}
          reminderFunction={this.goToReminders}
        ></Footer>
      </View>
    );
  }
}

export default RemindersScreen;

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
    borderColor: colors.grey,
    borderwidth: 3,
  },
  topParagraph: {
    padding: 5,
    margin: 5,
    minWidth: "90%",
    maxWidth: "90%",
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.grey,
  },
  text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
  },
  touchable: {
    marginBottom: 10,
    marginTop: 10,
    height: 40,
    minWidth: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.grey,
    borderWidth: 2,
  },
});
