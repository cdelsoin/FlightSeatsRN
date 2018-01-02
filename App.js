import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import Seats from './seats.json';

class Seat extends React.Component {
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
          this.props.firstClass && styles.firstClassSeat,
          this.props.businessClass && styles.businessClassSeat,
          this.props.economyClass && styles.economyClassSeat,
          this.props.seat.premium && styles.premiumSeat,
          this.isCurrentSeatSelected() && styles.selectedSeat,
          this.props.seat.occupied && styles.occupiedSeat,
        ]}>
        <Text style={[{color: '#000', opacity: 0.5}]}>{this.props.seat.seatID}</Text>
      </TouchableHighlight>
    )
  }
}

class AisleSeat extends React.Component {
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
          this.props.firstClass && styles.firstClassSeat,
          this.props.businessClass && styles.businessClassSeat,
          this.props.economyClass && styles.economyClassSeat,
          this.props.firstClass && styles.firstClassAisleSeat,
          this.props.businessClass && styles.businessClassAisleSeat,
          this.props.economyClass && styles.economyClassAisleSeat,
          this.props.seat.premium && styles.premiumSeat,
          this.isCurrentSeatSelected() && styles.selectedSeat,
          this.props.seat.occupied && styles.occupiedSeat,
        ]}>
        <Text style={[{color: '#000', opacity: 0.5}]}>{this.props.seat.seatID}</Text>
      </TouchableHighlight>
    )
  }
}

class FirstClassSection extends React.Component {
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
      if (seat.seat === "B") {
        return <AisleSeat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} firstClass={true}/>
      } else {
        return <Seat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} firstClass={true}/>
      }
    })

    return (
      <View style={styles.firstClassContainer}>
        {firstClassSeats}
      </View>
    )
  }
}

class BusinessClassSection extends React.Component {
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
      if (seat.seat === "C") {
        return <AisleSeat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} businessClass={true}/>
      } else {
        return <Seat key={index} seat={seat} selectedSeat={selectedSeat} handleSeatChange={handleSeatChange} businessClass={true}/>
      }
    })

    return (
      <View style={styles.businessClassContainer}>
        {businessClassSeats}
      </View>
    )
  }
}

class EconomyClassSection extends React.Component {
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

class SeatSelectionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSeatChange = this.handleSeatChange.bind(this)
    this.state = {
      selectedSeat: {}
    }
  }

  handleSeatChange(selectedSeat){
    this.setState({})
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
          <MessageBannerComponent selectedSeat={this.state.selectedSeat} />
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

class MessageBannerComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      seatPrice: 0
    }
  }

  calculatePrice(){
    var cost = 0

    switch (this.props.selectedSeat.class) {
      case "First":
        cost += 1295
        break;
      case "Business":
        cost += 985
        break;
      case "Economy":
        cost += 257
        break;
      default:
    }

    if (this.props.selectedSeat.premium) { cost += 120}

    return cost
  }
  render(props) {

    return (
      <View style={[styles.messageContainer, this.props.selectedSeat.seat && styles.messageContainerFullHeight ]}>
        { !this.props.selectedSeat.seat &&
          <Text style={{fontWeight: 'bold',fontSize: 20, color:'#fff'}}>Please select your seat</Text>
        }
        { this.props.selectedSeat.seat &&
          <View style={{
            flexDirection: 'row',
            flex:1
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1
            }}>
              <Text style={{fontWeight: 'bold',fontSize: 20, color:'#fff'}}>{this.props.selectedSeat.seatID}</Text>
              <Text style={{fontWeight: 'bold',fontSize: 20, color:'#fff'}}>{this.props.selectedSeat.class} Class</Text>
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#14ff81',
              flex: 1
            }}>
              <Text style={{fontWeight: 'bold',fontSize: 40, color:'#000'}}>${this.calculatePrice()}</Text>
            </View>
          </View>
        }
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
          <View style={styles.legendSeatPremium}></View>
          <Text>Premium</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatSelected}></View>
          <Text>Selected</Text>
        </View>
        <View style={styles.seatDefinition}>
          <View style={styles.legendSeatUnavailable}></View>
          <Text>Unavailable</Text>
        </View>
      </View>
    )
  }
}


export default class App extends React.Component {
  render() {

    return (
      <View style={styles.appContainer} >
        <View style={styles.locationContentContainer}>
          <Text style={{fontWeight:'bold', fontSize:20}}>BOS - SFO</Text>
        </View>
        <View style={styles.legendContentContainer}>
          <SeatLegend/>
        </View>
        <SeatSelectionComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    flex: 1,
  },
  legendContentContainer: {
    backgroundColor: '#fff',
    height: 30,
  },
  infoContentContainer: {
    backgroundColor: '#e93697',
    height: 150,
  },
  messageContainer: {
    backgroundColor: '#e93697',
    height: 40,
    alignItems: 'center',
    justifyContent:'center'
  },
  messageContainerFullHeight:{
    height:100
  },
  locationContentContainer: {
    backgroundColor: '#f7f7fa',
    height: 30,
    marginTop:25,
    alignItems: 'center',
    justifyContent:'center'
  },
  seatSelectionContainer: {
    backgroundColor: '#7c2b8b',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },

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
  seat: {
    alignItems: 'center',
    backgroundColor: '#1463ff',
    // borderRadius: 25,
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
    backgroundColor: '#1463ff',
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
    backgroundColor: '#14ff81',
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
// #14ff81 - Money - Selected Seat
// #14fff8 - ???
