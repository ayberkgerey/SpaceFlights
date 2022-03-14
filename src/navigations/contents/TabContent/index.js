import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function TabContent() {
  const [homeColor, setHomeColor] = useState('orange');
  const [blogsColor, setBlogsColor] = useState('rgb(15,15,15)');
  const [marksColor, setMarksColor] = useState('rgb(15,15,15)');
  const navigation = useNavigation();

  const changeColor = tabName => {
    if (tabName === 'blogsColor') {
      setHomeColor('rgb(15,15,15)');
      setBlogsColor('orange');
      setMarksColor('rgb(15,15,15)');
    }
    if (tabName === 'homeColor') {
      setHomeColor('orange');
      setBlogsColor('rgb(15,15,15)');
      setMarksColor('rgb(15,15,15)');
    }
    if (tabName === 'marksColor') {
      setHomeColor('rgb(15,15,15)');
      setBlogsColor('rgb(15,15,15)');
      setMarksColor('orange');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '33%',
          height: 38,
          borderBottomWidth: 3,
          borderBottomColor: homeColor,
        }}
        onPress={() => {
          changeColor('homeColor');
          navigation.navigate('Home');
        }}>
        <Text style={styles.title}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '33%',
          height: 38,
          borderBottomWidth: 3,
          borderBottomColor: blogsColor,
        }}
        onPress={() => {
          changeColor('blogsColor');
          navigation.navigate('Blogs');
        }}>
        <Text style={styles.title}>Blogs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '33%',
          height: 38,
          borderBottomWidth: 3,
          borderBottomColor: marksColor,
        }}
        onPress={() => {
          changeColor('marksColor');
          navigation.navigate('Marks');
        }}>
        <Text style={styles.title}>Marks</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'rgb(15,15,15)',
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
