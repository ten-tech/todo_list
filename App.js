import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './App.style';
import { Header } from "./components/Header/header.jsx"; 

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <View>
        <Header/>
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  );
}
