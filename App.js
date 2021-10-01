import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
import Home from './screens/Home';

export default function App() {
  return (
    <RootNavigation></RootNavigation>
  );
}
