import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OtherPage from "./OtherPage";

const Stack = createStackNavigator();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="OtherPage" component={OtherPage} />
  </Stack.Navigator>
);

export default Navigation;
