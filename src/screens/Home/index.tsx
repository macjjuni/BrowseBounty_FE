import React, {useCallback} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {type ParamListBase} from '@react-navigation/native'

// export type RootStackParamList = {
//   Home: undefined
//   Login: undefined
// }
type HomeScreenTypes = NativeStackScreenProps<ParamListBase, 'Home'>

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const HomeScreen = ({navigation}: HomeScreenTypes) => {
  const onClick = useCallback(() => {
    navigation.navigate('Login')
  }, [navigation])
  return (
    <View style={style.view}>
      <TouchableOpacity onPress={onClick}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
