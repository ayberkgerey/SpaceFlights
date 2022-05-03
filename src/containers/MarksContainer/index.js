import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MarkContext} from '../../contexts/MarkContext';
import MarkedCard from '../../components/Cards/MarkedCard';

export default function MarksContainer() {
  const {marks} = useContext(MarkContext);
  return marks.length ? (
    <View style={styles.container}>
      <FlatList
        style={{marginBottom: 15, marginTop: 9}}
        data={marks}
        renderItem={({item}) => <MarkedCard data={item} />}
      />
    </View>
  ) : (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>You haven't mark anything.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(20,20,20)',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(20,20,20)',
  },
  emptyText: {
    color: 'gray',
    fontWeight: '500',
    fontSize: 17,
  },
});
