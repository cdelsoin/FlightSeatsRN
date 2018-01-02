import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seat from './Seat.js'
import AisleSeat from './AisleSeat.js'

export default class EconomyClassSection extends React.Component {
  constructor(props) {
    super(props)
    this.handleSeatChange = this.handleSeatChange.bind(this)
  }

  handleSeatChange(seat) {
    this.props.handleSeatChange(seat)
  }

  render(props){
    const selectedSeat = this.props.selectedSeat
    const handleSeatChange = this.props.handleSeatChange

    const economyClassSeats = this.props.economyClass.map(function(seat, index){
      if (seat.seat === "B" || seat.seat === "G") {
        return <AisleSeat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} economyClass={true}/>
      } else {
        return <Seat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} economyClass={true}/>
      }
    })
    return (
      <View style={styles.economyClassContainer}>
        {economyClassSeats}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  economyClassContainer: {
    backgroundColor: '#6f257b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    paddingTop: 10,
    paddingRight: 8,
    paddingBottom: 10,
    paddingLeft: 8,
  },
});
