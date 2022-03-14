import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import NewsCard from '../../components/Cards/NewsCard';

export default function BlogsContainer() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    fetch('https://api.spaceflightnewsapi.net/v3/blogs')
      .then(response => response.json())
      .then(responseJson => {
        setBlogs(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
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
