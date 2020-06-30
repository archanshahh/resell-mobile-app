import { useEffect } from "react";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  //call when AppNavigator loads for the first time
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  //request user for notification permissions
  const registerForPushNotifications = async () => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;

    try {
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
