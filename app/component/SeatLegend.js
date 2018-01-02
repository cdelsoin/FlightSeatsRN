import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';

export default class SeatLegend extends React.Component {
  render(props){
    return (
      <View style={styles.seatLegendContainer}>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatAvailable}></View>
          <Text>Available</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatPremium}></View>
          <Text>Premium</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatSelected}></View>
          <Text>Selected</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatUnavailable}></View>
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
    // backgroundColor: '#6f257b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 3,
    marginLeft: 2,
    marginTop: 5,
    // padding: 5
  },
  legendSeatAvailable: {
    backgroundColor: '#1463ff',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    height: 20,
    width: 20,
  },
  legendSeatUnavailable: {
    marginRight: 1,
    backgroundColor: 'gray',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    height: 20,
    opacity: 0.2,
    width: 20,
  },
  legendSeatPremium: {
    marginRight: 1,
    backgroundColor: '#14fff8',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    height: 20,
    width: 20,
  },
  legendSeatSelected: {
    marginRight: 1,
    backgroundColor: '#14ff81',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    height: 20,
    width: 20,
  }
});
