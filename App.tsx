/* eslint-disable prettier/prettier */
import { View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
// import GoogleLogin from './components/GoogleLogin';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ContactList />
          <ActionCard />
          {/* <GoogleLogin /> */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
