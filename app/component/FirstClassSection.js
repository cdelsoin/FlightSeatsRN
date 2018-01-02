import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seat from './Seat.js'


export default class FirstClassSection extends React.Component {
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

    const firstClassSeats = this.props.firstClass.map(function(seat, index){
      return <Seat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} />
    })

    return (
      <View style={styles.firstClassContainer}>
        {firstClassSeats}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  firstClassContainer: {
    backgroundColor: '#6f257b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingRight: 40,
    paddingBottom: 10,
    paddingLeft: 40,
  },
});
