import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNoticeBar from "./app/components/OfflineNoticeBar";

export default function App() {
  return (
    <>
      <OfflineNoticeBar />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
