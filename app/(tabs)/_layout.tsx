import { Tabs } from 'expo-router';
import React from 'react';
import SignUpPage from './SignUpPage'; // If _layout.tsx is in the same directory
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {
  return (
    <div>
      <SignUpPage />
    </div>
  );
}
