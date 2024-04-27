import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { BlurView } from 'expo-blur';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      // tabBarStyle: { position: 'absolute' },
      // tabBarBackground: () => (
      //   <BlurView tint="light" intensity={60}  style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20}}
        
      //   />
      // ),
    }}
      // screenOptions={{
      //   tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      //   // Disable the static render of the header on web
      //   // to prevent a hydration error in React Navigation v6.
      //   headerShown: useClientOnlyValue(false, true),
      // }}

      >
        <Tabs.Screen name="index"  options={{
          title: "Home page",
          tabBarIcon: () => <FontAwesome name='tasks' size={24}  />,
          headerShown: false,
          
        }}  />
    
    </Tabs>
  );
}
