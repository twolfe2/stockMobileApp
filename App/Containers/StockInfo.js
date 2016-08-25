import React from 'react'
import { ScrollView, Text, View, ActivityIndicator } from 'react-native'
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
    let infoData = <Text>''</Text>;
    if(info) {
      infoData = Object.keys(info).map((value, index) => {
        return <Text style={styles.text} key={index}>
          {`${value} : ${info[value]}`}
        </Text>
      })

    }


    const { stockInfo } = this.props;
    return (
      <View style={styles.container}>
          {this.props.fetching ?
            <ActivityIndicator
               style={{
                 alignItems: 'center',
                 justifyContent: 'center',

               }}
               animating={true}
               size={'large'}
               color={"#ee8d37"}
             /> 
          :
            <View style={styles.form}>
              <View style={styles.row}>
              <Text style={styles.heading}>
                {stockInfo.Name}
              </Text>
              <Text style={{fontWeight: 'bold'}}>
                Price: ${stockInfo.LastPrice.toFixed(2)}
              </Text>
              <Text style={{color: stockInfo.Change > 0 ? 'green' : 'red'}}>
                Change: {stockInfo.Change.toFixed(2)}
              </Text>
              <Text style={{color: stockInfo.ChangePercent > 0 ? 'green' : 'red'}}>
                Change Percent: {stockInfo.ChangePercent.toFixed(2)}%
              </Text>
              <Text style={{color: stockInfo.ChangeYTD > 0 ? 'green' : 'red'}}>
                Change YTD: {stockInfo.ChangeYTD.toFixed(2)}
              </Text>
              <Text style={{color: stockInfo.ChangePercentYTD > 0 ? 'green' : 'red'}}>
                Change YTD Percent: {stockInfo.ChangePercentYTD.toFixed(3)}%
              </Text>
              <Text style={styles.price}>
                High: {stockInfo.High.toFixed(2)}
              </Text>
              <Text style={styles.price}>
                Low: {stockInfo.Low.toFixed(2)}
              </Text>
              <Text style={styles.price}>
                Open: {stockInfo.Open.toFixed(2)}
              </Text>
              </View>
            </View>
      }
      </View>
         
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stockInfo: state.stock.info,
    fetching: state.stock.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo)
