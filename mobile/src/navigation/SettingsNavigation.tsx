import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsParamList } from 'types/Route';
import LoginScreen from 'containers/LoginScreen';

const Stack = createStackNavigator<SettingsParamList>();

const SettingsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Settings'>
      <Stack.Screen name='Settings' component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
