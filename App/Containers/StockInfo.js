import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/StockInfoStyle'

class StockInfo extends React.Component {

  constructor (props) {
    super(props)
    
  }

  render () {
    console.log('stockInfo', this.props.stockInfo);
    const info = this.props.stockInfo;
    let infoData = <Text style={styles.text}>'Loading....'</Text>
    if(info) {
      infoData = Object.keys(info).map((value, index) => {
        return <Text style={styles.text}>
          {`${value} : ${info[value]}`}
        </Text>
      })

    }


    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.row}>
            {infoData}
          </View>
        </View>
      </View>
         
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stockInfo: state.stock.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo)
