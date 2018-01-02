import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';

// A legend to direct users
export default class SeatLegend extends React.Component {
  render(props){
    return (
      <View style={styles.seatLegendContainer}>

        <View style={styles.seatDefinition}>
          <View style={[styles.legendIcon, styles.legendSeatAvailable]}></View>
          <Text>Available</Text>
        </View>

        <View style={styles.seatDefinition}>
          <View style={[styles.legendIcon, styles.legendSeatPremium]}></View>
          <Text>Premium</Text>
        </View>

        <View style={styles.seatDefinition}>
          <View style={[styles.legendIcon, styles.legendSeatSelected]}></View>
          <Text>Selected</Text>
        </View>

        <View style={styles.seatDefinition}>
          <View style={[styles.legendIcon, styles.legendSeatUnavailable]}></View>
          <Text>Unavailable</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  seatLegendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  seatDefinition: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 3,
    marginLeft: 2,
    marginTop: 5,
  },
  legendIcon: {
    borderRadius: 25,
    height: 20,
    marginRight: 1,
    width: 20,
  },
  legendSeatAvailable: {
    backgroundColor: '#1463ff',
  },
  legendSeatUnavailable: {
    backgroundColor: '#74367c',
    opacity: 0.2,
  },
  legendSeatPremium: {
    backgroundColor: '#14fff8',
  },
  legendSeatSelected: {
    backgroundColor: '#14ff81',
  }
});
