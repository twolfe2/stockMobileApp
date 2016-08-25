import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }
  handlePressStockSearch = () => {
    this.toggleDrawer()
    NavigationActions.stockSearch()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Stock Search' onPress={this.handlePressStockSearch} />
        
        
      </ScrollView>
    )
  }
}

//         <DrawerButton text='Component Examples' onPress={this.handlePressComponents} />
//         <DrawerButton text='Usage Examples' onPress={this.handlePressUsage} />
//         <DrawerButton text='API Testing' onPress={this.handlePressAPI} />
//         <DrawerButton text='Themes' onPress={this.handlePressTheme} />
//         <DrawerButton text='Device Info' onPress={this.handlePressDevice} />

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
