import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import SeatData from './data/seats.json';
import SeatLegend from './component/SeatLegend'
import SeatSelection from './component/SeatSelection'

const seatData = SeatData
const firstClass = []
const businessClass = []
const economyClass = []

seatData.sort(function (a, b) {
  if (a.row > b.row) {
      return 1;
  } else if (a.row < b.row) {
      return -1;
  }

  if (a.seat < b.seat) {
      return -1;
  } else if (a.seat > b.seat) {
      return 1
  } else {
      return 0;
  }
})

seatData.forEach(function(seat){
  seat.seatID = seat.row + seat.seat
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

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.appContainer} >
        <View style={styles.flightDestinationContentContainer}>
          <Text style={{fontWeight:'bold', fontSize:20}}>BOS - SFO</Text>
        </View>
        <View style={styles.legendContentContainer}>
          <SeatLegend/>
        </View>
        <SeatSelection firstClass={firstClass} businessClass={businessClass} economyClass={economyClass}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    flex: 1,
  },
  legendContentContainer: {
    backgroundColor: '#fff',
    height: 30,
  },
  flightDestinationContentContainer: {
    backgroundColor: '#f7f7fa',
    height: 30,
    marginTop:25,
    alignItems: 'center',
    justifyContent:'center'
  },
});

// PALETTE
// #491a53 - Lola Navbar
// #7c2b8b - Primary Background
// #6f257b - Secondary Background
// #1463ff - Primary Button
// #6f217c - Secondary Button
// #3696e9 - Premium Seat
// #ff0190 - Info Button
// #e93697 - Menu
// #dab537 - #b2795f - Secondary Text
// #14ff81 - Money - Selected Seat
// #14fff8 - ???

// NOTE may need to edit the file path to App.js here in the future
// lola-seats-crna/node_modules/react-native-scripts/build/bin/crna-entry.js
