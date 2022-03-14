import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ShareButton() {
  return (
    <TouchableOpacity>
      <FontAwesome name={'share-alt'} color={'white'} size={20} />
    </TouchableOpacity>
  );
}
