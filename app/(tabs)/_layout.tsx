import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' }, 
          default: {},
        }),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: ' ',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('@/assets/images/home.png')}
              style={{
                
                width: 28,
                height: 28,
                tintColor: focused ? Colors[colorScheme ?? 'light'].tint : color,
              }}
            />
          ),
        }}
      />

      {/* Portfolio Tab */}
      <Tabs.Screen
        name="portfolio"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('@/assets/images/portfolio.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? Colors[colorScheme ?? 'light'].tint : color,
              }}
            />
          ),
        }}
      />

      {/* Wallet Tab */}
      <Tabs.Screen
        name="wallet"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('@/assets/images/wallet.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? Colors[colorScheme ?? 'light'].tint : color,
              }}
            />
          ),
        }}
      />

      {/* User Tab */}
      <Tabs.Screen
        name="user"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('@/assets/images/user.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? Colors[colorScheme ?? 'light'].tint : color,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
