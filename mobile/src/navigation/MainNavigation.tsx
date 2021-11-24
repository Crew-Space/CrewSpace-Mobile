import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';

import { home, notice, community, member, settings } from 'assets/svg/icons';
import { GRAY2, PRIMARY } from 'theme/Colors';
import { MainRouterParamList } from 'types/Route';
import Text from 'components/Text';
import { SettingsNavigation } from 'navigation';
import { HomeScreen, NoticeScreen, CommunityScreen, MemberListScreen } from 'containers';

const Tab = createBottomTabNavigator<MainRouterParamList>();

const TarBarLabel = ({ focused, text }: { focused: boolean; text: string }) => (
  <Text fontType={'REGULAR_12'} style={{ color: focused ? PRIMARY : GRAY2 }}>
    {text}
  </Text>
);

const TabBarIcon = ({ focused, xml }: { focused: boolean; xml: string }) => (
  <SvgXml xml={xml} fill={focused ? PRIMARY : GRAY2} />
);

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: { paddingTop: 10 },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => <TarBarLabel focused={focused} text={'홈'} />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} xml={home} />,
        })}
      />
      <Tab.Screen
        name='Notice'
        component={NoticeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => <TarBarLabel focused={focused} text={'공지'} />,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} xml={notice} />,
        }}
      />
      <Tab.Screen
        name='Community'
        component={CommunityScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => <TarBarLabel focused={focused} text={'커뮤니티'} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} xml={focused ? community.on : community.off} />
          ),
        }}
      />
      <Tab.Screen
        name='MemberList'
        component={MemberListScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => <TarBarLabel focused={focused} text={'회원'} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} xml={focused ? member.on : member.off} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsNavigation}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => <TarBarLabel focused={focused} text={'설정'} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} xml={focused ? settings.on : settings.off} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
