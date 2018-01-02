import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seat from './Seat.js'


export default class BusinessClassSection extends React.Component {
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

    const businessClassSeats = this.props.businessClass.map(function(seat, index){
      return <Seat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} />
    })

    return (
      <View style={styles.businessClassContainer}>
        {businessClassSeats}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  businessClassContainer: {
    backgroundColor: '#6f257b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});
