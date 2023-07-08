import React, {useEffect} from 'react'
import {SafeAreaView, ScrollView, StatusBar, useColorScheme, View} from 'react-native'
import Test from '@/components/Test'
import {Colors} from 'react-native/Libraries/NewAppScreen'
// import storage from '@/utils/storage'

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  // const setData = async () => {
  //   await storage.setData('test', {data: 'This is test Data!'})
  // }

  // const getData = async () => {
  //   const data = await storage.getData('test')
  //   if (typeof data === 'boolean') return
  //   console.log(data.data)
  // }

  useEffect(() => {}, [])

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
