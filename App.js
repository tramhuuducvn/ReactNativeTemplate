import {Text, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Reactions from './src/Reactions';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.contentAbove} />
        <Reactions />
        <View style={styles.contentBelow} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
  },

  reaction: {
    position: 'absolute',
  },

  contentAbove: {
    width: '100%',
    height: 500,
  },

  contentBelow: {
    width: '100%',
    height: 800,
  },
});
