import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import MarkProvider from './src/contexts/MarkContext';

export default function App() {
  return (
    <MarkProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </MarkProvider>
  );
}
