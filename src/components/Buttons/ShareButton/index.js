import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Share} from 'react-native-share';
import ShareIcon from '../../../assets/share.svg';

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
      <ShareIcon fill={'white'} width={20} height={20} />
    </TouchableOpacity>
  );
}
