// file i created today tp pull data through MVP-Marketplace/kosher-without-borders React Native repo from the cloud firestore. this was succesful! 7/30

import React from 'react';
import { firestore } from '../firebase/configFirebase';
import { Text, View } from 'react-native';


export const GetListings = () => {
// example firestore data retrieval
// select collection type from firestore & name of collection to retrieve
  const docRef = firestore.collection('listings').doc('chabad-lubavitch');

  docRef.get().then((doc) => {
    if (doc.exists) {
        console.log('Document data:', doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
    }
  }).catch((error) => {
    console.log('Error getting document:', error);
  });

  return (
    <View>
      <Text>Pulling Data</Text>
    </View>
  );
}
