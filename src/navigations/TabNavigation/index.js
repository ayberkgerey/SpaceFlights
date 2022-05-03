import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BlogsContainer, HomeContainer, MarksContainer} from '../../containers';
import TabContent from '../contents/TabContent';

export default function TabNavigation() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBar={props => <TabContent {...props} />}>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Blogs" component={BlogsContainer} />
      <Tab.Screen name="Marks" component={MarksContainer} />
    </Tab.Navigator>
  );
}
