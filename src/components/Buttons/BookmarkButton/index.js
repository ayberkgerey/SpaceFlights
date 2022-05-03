import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {MarkContext} from '../../../contexts/MarkContext';
import BookMarkIcon from '../../../assets/bookmark.svg';

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
    } else {
      setMarkColor('white');
    }
  });

  return (
    <TouchableOpacity
      style={{marginLeft: 10}}
      onPress={() => {
        changeColor();
      }}>
      <BookMarkIcon fill={markColor} height={20} width={20} />
    </TouchableOpacity>
  );
}
