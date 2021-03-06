import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seat from './Seat';
import MessageBanner from './MessageBanner'
import FirstClassSection from './FirstClassSection'
import BusinessClassSection from './BusinessClassSection'
import EconomyClassSection from './EconomyClassSection'

// Parent component to handle seat selection and message banners
export default class SeatSelection extends React.Component {
  constructor(props) {
    super(props)
    this.handleSeatChange = this.handleSeatChange.bind(this)
    this.state = {
      selectedSeat: {}
    }
  }

  handleSeatChange(selectedSeat){
    this.setState({selectedSeat})
  }

  confirmSeat(){
    if (!this.state.selectedSeat.seat) return
    Alert.alert('Your seat is confirmed.\nThank you for using Lola Seats!')
  }

  render(props) {

    return (
      <View style={{flex:1}}>

        <View>
          <MessageBanner selectedSeat={this.state.selectedSeat} />
        </View>

        <ScrollView contentContainerStyle={styles.seatSelectionContainer}>
          <FirstClassSection  selectedSeat={this.state.selectedSeat} handleSeatChange={this.handleSeatChange} firstClass={this.props.firstClass} />
          <BusinessClassSection  selectedSeat={this.state.selectedSeat} handleSeatChange={this.handleSeatChange} businessClass={this.props.businessClass} />
          <EconomyClassSection  selectedSeat={this.state.selectedSeat} handleSeatChange={this.handleSeatChange} economyClass={this.props.economyClass} />
        </ScrollView>

        <View style={styles.confirmButtonContainer}>
          <TouchableHighlight
            style={[styles.confirmButtonDisabled, this.state.selectedSeat.seat && styles.confirmButtonActive]}
            onPress={this.confirmSeat.bind(this)}
            disabled={!this.state.selectedSeat.seat}>
            <Text style={styles.confirmButtonText}>CONFIRM</Text>
          </TouchableHighlight>
        </View>

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
  confirmButtonContainer: {
    padding: 10,
    backgroundColor: '#7c2b8b',
  },
  confirmButtonActive: {
    backgroundColor: '#1463ff',
  },
  confirmButtonDisabled: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
