import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function TabContent() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Blogs');
        }}>
        <Text style={styles.title}>Blogs</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'rgb(11,0,52)',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 38,
    borderBottomWidth: 3,
    borderBottomColor: 'orange',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
