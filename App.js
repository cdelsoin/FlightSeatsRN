import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Seats from './seats.json';

export default class App extends React.Component {
  render() {

    const seatData = Seats
    const firstClass = []
    const businessClass = []
    const economyClass = []

    seatData.forEach(function(seat){
      switch (seat.class) {
        case 'First':
            firstClass.push(seat)
          break;
        case 'Business':
            businessClass.push(seat)
          break;
        case 'Economy':
            economyClass.push(seat)
          break;
        default:

      }
    })

    firstClass.sort(function (a, b) {
      if (a.row > b.row) {
          return 1;
      } else if (a.row < b.row) {
          return -1;
      }

      // Else go to the 2nd item
      if (a.seat < b.seat) {
          return -1;
      } else if (a.seat > b.seat) {
          return 1
      } else {
          return 0;
      }
    })

    return (
      <ScrollView style={styles.container}>

        {firstClass.map(function(seat, index){
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
