import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seats from '../data/seats.json';
import MessageBanner from './MessageBanner'
import FirstClassSection from './FirstClassSection'
import BusinessClassSection from './BusinessClassSection'
import EconomyClassSection from './EconomyClassSection'

export default class SeatSelection extends React.Component {
  constructor(props) {
    super(props)
    this.handleSeatChange = this.handleSeatChange.bind(this)
    this.state = {
      selectedSeat: {}
    }
  }

  handleSeatChange(selectedSeat){
    // this.setState({})
    this.setState({selectedSeat})
  }

  render(props) {

    const seatData = Seats
    const firstClass = []
    const businessClass = []
    const economyClass = []

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

    businessClass.sort(function (a, b) {
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

    economyClass.sort(function (a, b) {
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

    return (
      <View style={{flex:1}}>
        <View>
          <MessageBanner selectedSeat={this.state.selectedSeat} />
        </View>
        <ScrollView contentContainerStyle={styles.seatSelectionContainer}>
          <FirstClassSection  selectedSeat={this.state.selectedSeat} handleSeatChange={this.handleSeatChange} firstClass={firstClass}/>
          <BusinessClassSection  selectedSeat={this.state.selectedSeat} handleSeatChange={this.handleSeatChange} businessClass={businessClass}/>
          <EconomyClassSection  selectedSeat={this.state.selectedSeat} handleSeatChange={this.handleSeatChange} economyClass={economyClass}/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  seatSelectionContainer: {
    backgroundColor: '#7c2b8b',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
});
