import React from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import dismissKeyboard from 'dismissKeyboard'

import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import StockSymbolsList from './StockSymbolsList'

// Styles
import styles from './Styles/StockSearchStyle'

class StockSearch extends React.Component {

  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  render () {
    const {symbols} = this.props;
    console.log('symbols', symbols);
    return (
      <View style={styles.container}>
      <View style={styles.form}>
      <View style={styles.row}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a company name (i.e. Amazon)"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          onSubmitEditing={() => {
            this.props.getSymbols(this.state.text)
            this.setState({text: ''})
          }}
          />
          </View>
        </View>
        <RoundedButton
          onPress={() => {
            this.props.getSymbols(this.state.text)
            this.setState({text: ''})
            dismissKeyboard();
          }}
          text='Get Symbols'
        >
       
        </RoundedButton>

        <StockSymbolsList />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    symbols: state.stock.symbols
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSymbols: (userInput) =>  dispatch(Actions.requestSymbols(userInput)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockSearch)
