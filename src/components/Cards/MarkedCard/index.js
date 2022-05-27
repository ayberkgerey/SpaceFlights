import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BookmarkButton from '../../Buttons/BookmarkButton';

export default function MarkedCard({data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('News', {source: data.url});
      }}>
      <Image
        source={{
          uri: data.imageUrl,
        }}
        style={styles.photoView}
      />
      <View>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.iconView}>
          <BookmarkButton data={data} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'rgb(30,30,33)',
    width: '98%',
    height: 140,
    borderRadius: 15,
    marginTop: 13,
  },
  photoView: {
    width: '45%',
    height: '98%',
    borderRadius: 15,
  },
  title: {
    width: 200,
    padding: 10,
    marginLeft: 4,
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'left',
  },
  iconView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 10,
  },
});
