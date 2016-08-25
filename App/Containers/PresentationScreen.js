import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  static propTypes = {
    componentExamples: PropTypes.func,
    usageExamples: PropTypes.func,
    apiTesting: PropTypes.func,
    theme: PropTypes.func,
    deviceInfo: PropTypes.func
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Click below to search for stocks.
            </Text>
          </View>

        
          <RoundedButton onPress={this.props.stockSearch}>
            Stock Search
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentExamples: NavigationActions.componentExamples,
    usageExamples: NavigationActions.usageExamples,
    apiTesting: NavigationActions.apiTesting,
    theme: NavigationActions.theme,
    deviceInfo: NavigationActions.deviceInfo,
    stockSearch: NavigationActions.stockSearch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
