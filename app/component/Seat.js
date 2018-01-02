import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';

export default class Seat extends React.Component {
  constructor(props) {
    super(props)
    this.handleSeatChange = this.handleSeatChange.bind(this)
  }

  isCurrentSeatSelected() {
    if (this.props.seat === this.props.selectedSeat) return true
  }

  handleSeatChange(seat){
    if (this.props.seat.occupied) return
    if (this.isCurrentSeatSelected()) {
      this.props.handleSeatChange({})
    } else {

      this.props.handleSeatChange(this.props.seat)
    }
  }

  render(props) {
    return (
      <TouchableHighlight
        onPress={this.handleSeatChange.bind(this)}
        style={[
          styles.seat,
          this.props.seat.class === "First" && styles.firstClassSeat,
          this.props.seat.class === "Business" && styles.businessClassSeat,
          this.props.seat.class === "Economy" && styles.economyClassSeat,
          this.props.seat.class === "First"&& this.props.seat.seat === "B" && styles.firstClassAisleSeat,
          this.props.seat.class === "Business" && this.props.seat.seat === "C" && styles.businessClassAisleSeat,
          this.props.seat.class === "Economy" && this.props.seat.seat === "B" && styles.economyClassAisleSeat,
          this.props.seat.class === "Economy" && this.props.seat.seat === "G" && styles.economyClassAisleSeat,
          this.props.seat.premium && styles.premiumSeat,
          this.isCurrentSeatSelected() && styles.selectedSeat,
          this.props.seat.occupied && styles.occupiedSeat,
        ]}>
        <Text style={[{opacity: 0.5}]}>{this.props.seat.seatID}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  seat: {
    alignItems: 'center',
    backgroundColor: '#1463ff',
    borderColor: '#6f257b',
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  firstClassSeat: {
    margin: 10
  },
  businessClassSeat: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5
  },
  economyClassSeat: {
    margin:3
  },
  firstClassAisleSeat: {
    marginRight: 65
  },
  businessClassAisleSeat: {
    marginRight: 60
  },
  economyClassAisleSeat: {
    marginRight: 20
  },
  selectedSeat: {
    backgroundColor: '#14ff81',
  },
  occupiedSeat: {
    backgroundColor: 'gray',
    opacity: 0.2
  },
  premiumSeat: {
    backgroundColor: '#14fff8',
  },
});
