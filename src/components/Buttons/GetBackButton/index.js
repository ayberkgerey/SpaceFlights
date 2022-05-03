import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../assets/back.svg';

export default function GetBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{marginLeft: 10}}
      onPress={() => {
        navigation.goBack();
      }}>
      <BackIcon width={25} height={25} fill={'orange'} />
    </TouchableOpacity>
  );
}
