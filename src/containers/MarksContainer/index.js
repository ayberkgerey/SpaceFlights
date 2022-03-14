import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {MarkContext} from '../../contexts/MarkContext';
import MarkedCard from '../../components/Cards/MarkedCard';

export default function MarksContainer() {
  const {marks} = useContext(MarkContext);
  return (
    <View style={styles.container}>
      <FlatList
        style={{marginBottom: 15, marginTop: 9}}
        data={marks}
        renderItem={({item}) => <MarkedCard data={item} />}
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
