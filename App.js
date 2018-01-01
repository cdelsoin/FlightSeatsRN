import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Seats from './seats.json';

class Seat extends React.Component {
  render(props) {
    return (
      <View style={[styles.seat, this.props.seat.occupied && styles.occupiedSeat, this.props.seat.premium && styles.premiumSeat]}>
        <Text>{this.props.seat.row}{this.props.seat.seat}</Text>
      </View>
    )
  }
}

class AisleSeat extends React.Component {
  render(props) {
    return (
      <View style={[styles.seat, styles.aisleSeat, this.props.seat.occupied && styles.occupiedSeat, this.props.seat.premium && styles.premiumSeat]}>
        <Text>{this.props.seat.row}{this.props.seat.seat}</Text>
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

      // Else go to the 2nd item
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

      // Else go to the 2nd item
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
        return <AisleSeat key={index} seat={seat}/>

      } else {

        return <Seat key={index} seat={seat}/>
      }
    })

    return (
      // NOTE TURN FIRST CLASS INTO ITS OWN COMPONENT THEN CHANGE THIS <VIEW> TO <SCROLLVIEW>
      <View style={styles.firstClassContainer}>
        {firstClassSeats}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // contentContainer: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'flex-start',
  //   justifyContent: 'center',
  // },
  firstClassContainer: {
    flex: 1,
    backgroundColor: '#7c2b8b',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30,
    paddingRight: 45,
    paddingLeft: 45,
  },
  seat: {
    alignItems: 'center',
    backgroundColor: '#1463ff',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    margin: 5,
    width: 50,
  },
  aisleSeat: {
    marginRight: 30
  },
  occupiedSeat: {
    backgroundColor: 'gray',
    opacity: 0.4
  },
  premiumSeat: {
    backgroundColor: '#3696e9',
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
