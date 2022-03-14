import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MarkContext = createContext();

const MarkProvider = ({children}) => {
  const [marks, setMarks] = useState([]);

  const addMark = mark => {
    setMarks([...marks, mark]);
    console.log('Mark added : ' + JSON.stringify(marks));
  };

  const removeMark = id => {
    setMarks(marks.filter(mark => mark.id !== id));
    console.log('Mark Removed : ' + JSON.stringify(marks));
  };

  const checkMark = id => {
    const check = marks.some(
      mark => JSON.stringify(mark.id) === JSON.stringify(id),
    );
    console.log('Check : ' + check);
    return check;
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('myMarks', JSON.stringify(marks));
      console.log('Data stored');
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('myMarks');
      const value = JSON.parse(valueString);
      if (value !== null) {
        console.log('Data has pulled');
        console.log(value);
        setMarks(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    storeData();
  }, [marks]);

  return (
    <MarkContext.Provider
      value={{
        marks,
        addMark,
        checkMark,
        removeMark,
      }}>
      {children}
    </MarkContext.Provider>
  );
};

export default MarkProvider;
