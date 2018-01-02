import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import SeatLegend from './component/SeatLegend'
import SeatSelection from './component/SeatSelection'


export default class App extends React.Component {
  render() {

    return (
      <View style={styles.appContainer} >
        <View style={styles.locationContentContainer}>
          <Text style={{fontWeight:'bold', fontSize:20}}>BOS - SFO</Text>
        </View>
        <View style={styles.legendContentContainer}>
          <SeatLegend/>
        </View>
        <SeatSelection />
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
  // infoContentContainer: {
  //   backgroundColor: '#e93697',
  //   height: 150,
  // },
  // messageContainer: {
  //   backgroundColor: '#e93697',
  //   height: 40,
  //   alignItems: 'center',
  //   justifyContent:'center'
  // },
  // messageContainerFullHeight:{
  //   height:100
  // },
  locationContentContainer: {
    backgroundColor: '#f7f7fa',
    height: 30,
    marginTop:25,
    alignItems: 'center',
    justifyContent:'center'
  },
  // seatSelectionContainer: {
  //   backgroundColor: '#7c2b8b',
  //   flexDirection: 'column',
  //   flexWrap: 'wrap'
  // },

  // firstClassContainer: {
  //   backgroundColor: '#6f257b',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   marginTop: 10,
  //   marginRight: 10,
  //   marginLeft: 10,
  //   paddingTop: 10,
  //   paddingRight: 40,
  //   paddingBottom: 10,
  //   paddingLeft: 40,
  // },
  // businessClassContainer: {
  //   backgroundColor: '#6f257b',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   marginTop: 10,
  //   marginRight: 10,
  //   marginLeft: 10,
  //   paddingTop: 10,
  //   paddingRight: 20,
  //   paddingBottom: 10,
  //   paddingLeft: 20,
  // },
  // economyClassContainer: {
  //   backgroundColor: '#6f257b',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   margin: 10,
  //   paddingTop: 10,
  //   paddingRight: 8,
  //   paddingBottom: 10,
  //   paddingLeft: 8,
  // },
  // seat: {
  //   alignItems: 'center',
  //   backgroundColor: '#1463ff',
  //   // borderRadius: 25,
  //   borderColor: '#6f257b',
  //   borderWidth: 1,
  //   height: 30,
  //   justifyContent: 'center',
  //   width: 30,
  // },
  // firstClassSeat: {
  //   margin: 10
  // },
  // businessClassSeat: {
  //   marginTop: 8,
  //   marginBottom: 8,
  //   marginLeft: 5,
  //   marginRight: 5
  // },
  // economyClassSeat: {
  //   margin:3
  // },
  // firstClassAisleSeat: {
  //   marginRight: 65
  // },
  // businessClassAisleSeat: {
  //   marginRight: 60
  // },
  // economyClassAisleSeat: {
  //   marginRight: 20
  // },
  // selectedSeat: {
  //   backgroundColor: '#14ff81',
  // },
  // occupiedSeat: {
  //   backgroundColor: 'gray',
  //   opacity: 0.2
  // },
  // premiumSeat: {
  //   backgroundColor: '#14fff8',
  // },
  // seatLegendContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between'
  // },
  // seatDefinition: {
  //   // backgroundColor: '#6f257b',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   marginRight: 3,
  //   marginLeft: 2,
  //   marginTop: 5,
  //   // padding: 5
  // },
  // legendSeatAvailable: {
  //   backgroundColor: '#1463ff',
  //   borderRadius: 25,
  //   borderColor: '#fff',
  //   borderWidth: 1,
  //   height: 20,
  //   width: 20,
  // },
  // legendSeatUnavailable: {
  //   marginRight: 1,
  //   backgroundColor: 'gray',
  //   borderRadius: 25,
  //   borderColor: '#fff',
  //   borderWidth: 1,
  //   height: 20,
  //   opacity: 0.2,
  //   width: 20,
  // },
  // legendSeatPremium: {
  //   marginRight: 1,
  //   backgroundColor: '#14fff8',
  //   borderRadius: 25,
  //   borderColor: '#fff',
  //   borderWidth: 1,
  //   height: 20,
  //   width: 20,
  // },
  // legendSeatSelected: {
  //   marginRight: 1,
  //   backgroundColor: '#14ff81',
  //   borderRadius: 25,
  //   borderColor: '#fff',
  //   borderWidth: 1,
  //   height: 20,
  //   width: 20,
  // }
});

// PALETTE
// #491a53 - Lola Navbar
// #7c2b8b - Primary Background
// #6f257b - Secondary Background
// #1463ff - Primary Button
// #3696e9 - Premium Seat
// #6f217c - Secondary Button
// #ff0190 - Info Button
// #e93697 - Menu
// #ffffff - Text
// #dab537 - #b2795f - Secondary Text
// #14ff81 - Money - Selected Seat
// #14fff8 - ???
