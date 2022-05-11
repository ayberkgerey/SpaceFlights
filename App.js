import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import MarkProvider from './src/contexts/MarkContext';

export default function App() {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);

  return (
    <MarkProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </MarkProvider>
  );
}
