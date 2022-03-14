import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GetBackButton from '../../components/Buttons/GetBackButton';
import WebView from 'react-native-webview';

export default function NewsContainer({route}) {
  const {source} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <GetBackButton />
      <WebView source={{uri: source}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
