import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import NewsCard from '../../components/Cards/NewsCard';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';

export default function HomeContainer() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then(response => response.json())
      .then(responseJson => {
        setArticles(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    fetchArticles();
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => <NewsCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(20,20,20)',
  },
});
