import React, {useEffect} from 'react'
// import {SafeAreaView, ScrollView, StatusBar, useColorScheme, View} from 'react-native'
// import {Colors} from 'react-native/Libraries/NewAppScreen'
// import storage from '@/utils/storage'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import navigates from '@/navigate'
import SplashScreen from 'react-native-splash-screen'
import {API_URL} from '@env'

const Stack = createNativeStackNavigator()

const App = (): JSX.Element => {
  // const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // }

  // const setData = async () => {
  //   await storage.setData('test', {data: 'This is test Data!'})
  // }

  // const getData = async () => {
  //   const data = await storage.getData('test')
  //   if (typeof data === 'boolean') return
  //   console.log(data.data)
  // }

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
    console.log(API_URL)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {navigates.map(({name, options, component}) => (
          <Stack.Screen key={name} name={name} options={options} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
