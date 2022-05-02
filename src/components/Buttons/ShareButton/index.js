import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Share} from 'react-native-share';

export default function ShareButton(props) {
  const shareNews = async () => {
    const shareOptions = {
      title: 'Share via',
      message: 'some message',
      url: props.url,
    };
    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(shareResponse);
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        shareNews();
      }}>
      <FontAwesome name={'share-alt'} color={'white'} size={20} />
    </TouchableOpacity>
  );
}
