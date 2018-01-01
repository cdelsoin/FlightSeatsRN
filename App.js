import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seats from './seats.json';

class Seat extends React.Component {
  _onPressButton(props) {
    if (this.props.seat.occupied) {
      Alert.alert('Sorry seat ' + this.props.seat.row + this.props.seat.seat + ' is unavailable')
    } else {
      Alert.alert('You have selected seat ' + this.props.seat.row + this.props.seat.seat)
    }
  }

  render(props) {
    return (
      <TouchableHighlight
        onPress={this._onPressButton.bind(this)}
        style={[
          styles.seat,
          this.props.firstClass && styles.firstClassSeat,
          this.props.businessClass && styles.businessClassSeat,
          this.props.economyClass && styles.economyClassSeat,
          this.props.seat.premium && styles.premiumSeat,
          this.props.seat.selected && styles.selectedSeat,
          this.props.seat.occupied && styles.occupiedSeat,
        ]}>
        <Text style={[{color: '#ccc'}, this.props.seat.premium && {color: '#000'}]}>{this.props.seat.row}{this.props.seat.seat}</Text>
      </TouchableHighlight>
    )
  }
}

class AisleSeat extends React.Component {
  _onPressButton(props) {
    if (this.props.seat.occupied) {
      Alert.alert('Sorry seat ' + this.props.seat.row + this.props.seat.seat + ' is unavailable')
    } else {
      Alert.alert('You have selected seat ' + this.props.seat.row + this.props.seat.seat)
    }
  }

  render(props) {
    return (
      <TouchableHighlight
        onPress={this._onPressButton.bind(this)}
        style={[
          styles.seat,
          this.props.firstClass && styles.firstClassSeat,
          this.props.businessClass && styles.businessClassSeat,
          this.props.economyClass && styles.economyClassSeat,
          this.props.firstClass && styles.firstClassAisleSeat,
          this.props.businessClass && styles.businessClassAisleSeat,
          this.props.economyClass && styles.economyClassAisleSeat,
          this.props.seat.premium && styles.premiumSeat,
          this.props.seat.selected && styles.selectedSeat,
          this.props.seat.occupied && styles.occupiedSeat,
        ]}>
        <Text style={[{color: '#ccc'}, this.props.seat.premium && {color: '#000'}]}>{this.props.seat.row}{this.props.seat.seat}</Text>
      </TouchableHighlight>
    )
  }
}

class FirstClassSection extends React.Component {
  render(props){
    return (
      <View style={styles.firstClassContainer}>
        {this.props.firstClassSeats}
      </View>
    )
  }
}

class BusinessClassSection extends React.Component {
  render(props){
    return (
      <View style={styles.businessClassContainer}>
        {this.props.businessClassSeats}
      </View>
    )
  }
}

class EconomyClassSection extends React.Component {
  render(props){
    return (
      <View style={styles.economyClassContainer}>
        {this.props.economyClassSeats}
      </View>
    )
  }
}

class SeatLegend extends React.Component {
  render(props){
    return (
      <View style={styles.seatLegendContainer}>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatAvailable}></View>
          <Text>Available</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatUnavailable}></View>
          <Text>Unavailable</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatPremium}></View>
          <Text>Premium</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatSelected}></View>
          <Text>Selected</Text>
        </View>
      </View>
    )
  }
}


export default class App extends React.Component {
  render() {

    const seatData = Seats
    const firstClass = []
    const businessClass = []
    const economyClass = []

    seatData.forEach(function(seat){
      seat.selected = false
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

    const firstClassSeats = firstClass.map(function(seat, index){
      if (seat.seat === "B") {
        return <AisleSeat key={index} seat={seat} firstClass={true}/>
      } else {
        return <Seat key={index} seat={seat} firstClass={true}/>
      }
    })

    const businessClassSeats = businessClass.map(function(seat, index){
      if (seat.seat === "C") {
        return <AisleSeat key={index} seat={seat} businessClass={true}/>
      } else {
        return <Seat key={index} seat={seat} businessClass={true}/>
      }
    })

    const economyClassSeats = economyClass.map(function(seat, index){
      if (seat.seat === "B") {
        return <AisleSeat key={index} seat={seat} economyClass={true}/>
      } else if (seat.seat === "G"){
        return <AisleSeat key={index} seat={seat} economyClass={true}/>
      } else {
        return <Seat key={index} seat={seat} economyClass={true}/>
      }
    })

    return (
      // <FirstClassSection firstClassSeats={firstClassSeats}/>
      // <BusinessClassSection businessClassSeats={businessClassSeats}/>
      // <EconomyClassSection economyClassSeats={economyClassSeats}/>
      <View style={styles.appContainer} >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <FirstClassSection firstClassSeats={firstClassSeats}/>
          <BusinessClassSection businessClassSeats={businessClassSeats}/>
          <EconomyClassSection economyClassSeats={economyClassSeats}/>
        </ScrollView>
        <View style={styles.legendContentContainer}>
          <SeatLegend/>
        </View>
        <View style={styles.infoContentContainer}>
          <Text>hi</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  legendContentContainer: {
    backgroundColor: '#fff',
    height: 30,
    // marginTop:30
  },
  infoContentContainer: {
    backgroundColor: '#e93697',
    height: 125,
  },
  contentContainer: {
    // flex: 1,
    // alignItems: 'stretch',
    backgroundColor: '#7c2b8b',
    flexDirection: 'column',
    // overflow: 'scroll'
  },

  firstClassContainer: {
    backgroundColor: '#6f257b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingRight: 40,
    paddingBottom: 10,
    paddingLeft: 40,
  },
  businessClassContainer: {
    backgroundColor: '#6f257b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  economyClassContainer: {
    backgroundColor: '#6f257b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 30,
    paddingTop: 10,
    paddingRight: 8,
    paddingBottom: 10,
    paddingLeft: 8,
  },
  seat: {
    alignItems: 'center',
    backgroundColor: '#3696e9',
    borderRadius: 25,
    borderColor: '#6f257b',
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  firstClassSeat: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  businessClassSeat: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
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
    backgroundColor: '#14fff8',
  },
  occupiedSeat: {
    backgroundColor: 'gray',
    opacity: 0.2
  },
  premiumSeat: {
    backgroundColor: '#dab537',
  },
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
    backgroundColor: '#3696e9',
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
    backgroundColor: '#dab537',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    height: 20,
    width: 20,
  },
  legendSeatSelected: {
    marginRight: 1,
    backgroundColor: '#14fff8',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 1,
    height: 20,
    width: 20,
  }
});

// PALETTE
// #491a53 - Lola Navbar
// #7c2b8b - Primary Background
// #6f257b - Secondary Background
// #1463ff - Primary Button
// #3696e9 - Premium Seat
// #6f217c - Secondary Button
// #ff0190 - Info Button
// #e93697 - Menu
// #ffffff - Text
// #dab537 - #b2795f - Secondary Text
// #14ff81 - Money
// #14fff8 - Selected Seat
