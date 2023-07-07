import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme, View} from 'react-native'
import Test from '@/components/Test'

import {Colors} from 'react-native/Libraries/NewAppScreen'

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white}}>
          <Test />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
