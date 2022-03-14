import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MarkContext} from '../../../contexts/MarkContext';

export default function BookmarkButton({data}) {
  const [markColor, setMarkColor] = useState('white');
  const {addMark, checkMark, removeMark} = useContext(MarkContext);

  const changeColor = () => {
    if (markColor === 'white') {
      addMark(data);
      setMarkColor('gold');
    } else if (markColor === 'gold') {
      removeMark(data.id);
      setMarkColor('white');
    }
  };

  useEffect(() => {
    if (checkMark(data.id)) {
      setMarkColor('gold');
    }
  });

  return (
    <TouchableOpacity
      onPress={() => {
        changeColor();
      }}>
      <FontAwesome
        name={'bookmark'}
        color={markColor}
        size={20}
        style={{marginLeft: 15}}
      />
    </TouchableOpacity>
  );
}
