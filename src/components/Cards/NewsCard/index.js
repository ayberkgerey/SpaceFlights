import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BookmarkButton from '../../Buttons/BookmarkButton';
import ShareButton from '../../Buttons/ShareButton';

export default function NewsCard({data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('News', {source: data.url});
      }}>
      <ImageBackground
        source={{
          uri: data.imageUrl,
        }}
        imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        style={styles.photoView}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <Text style={styles.bottomTitle}>{data.newsSite}</Text>
        <View style={styles.iconView}>
          <ShareButton url={data.url} />
          <BookmarkButton data={data} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(30,30,30)',
    marginTop: 17,
    borderRadius: 10,
    width: '98%',
    maxWidth: '98%',
  },
  photoView: {
    width: '100%',
    height: 220,
  },
  bottomView: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  iconView: {
    flexDirection: 'row',
    marginRight: 10,
  },
  title: {
    padding: 5,
    marginLeft: 4,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'times',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  bottomTitle: {
    marginLeft: 10,
    color: 'white',
    fontWeight: '700',
  },
});
