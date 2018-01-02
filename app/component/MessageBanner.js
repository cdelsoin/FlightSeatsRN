import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, TouchableHighlight, Alert } from 'react-native';

export default class MessageBanner extends React.Component {
  constructor(props){
    super(props)
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
          <Text style={styles.bannerFont}>Please select your seat</Text>
        }

        { this.props.selectedSeat.seat &&
          <View style={{flexDirection: 'row',flex:1}}>

            <View style={[styles.subContainer]}>
              <Text style={styles.bannerFont}>Seat {this.props.selectedSeat.seatID}</Text>
              <Text style={styles.bannerFont}>{this.props.selectedSeat.class} Class</Text>
            </View>

            <View style={[styles.subContainer, {backgroundColor: '#14ff81'}]}>
              <Text style={{fontSize: 40}}>${this.calculatePrice()}</Text>
            </View>

          </View>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: '#e93697',
    height: 40,
    alignItems: 'center',
    justifyContent:'center'
  },
  messageContainerFullHeight:{
    height:70
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  bannerFont: {
    fontSize: 20,
    color:'#fff'
  }
});
