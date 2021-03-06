import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seat from './Seat.js'

// the economy class cabin section of the seat seleaction component
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

    // loops through data and creates unique seats
    const economyClassSeats = this.props.economyClass.map(function(seat, index){
      return <Seat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} />
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
