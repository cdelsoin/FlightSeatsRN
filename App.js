import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Seats from './seats.json';

export default class App extends React.Component {
  render() {

    const seatData = Seats

    return (
      <ScrollView style={styles.container}>

        {seatData.map(function(seat, index){
          return <Text key="index"> {seat.class}, {seat.row}, {seat.seat} </Text>
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    overflow: 'scroll'
  },
});
