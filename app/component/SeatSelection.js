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

        <View style={styles.confirmButton}>
          <Button
            style={styles.confirmButton}
            onPress={this.confirmSeat.bind(this)}
            disabled={!this.state.selectedSeat.seat}
            color={'#1463ff'}
            title="CONFIRM">
          </Button>
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
  confirmButton: {
    padding: 10,
    backgroundColor: '#7c2b8b',
    height: 55
  },
});
