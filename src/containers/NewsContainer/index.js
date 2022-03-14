import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GetBackButton from '../../components/Buttons/GetBackButton';

export default function NewsContainer() {
  return (
    <SafeAreaView style={styles.container}>
      <GetBackButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
