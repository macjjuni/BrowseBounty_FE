import React, {useCallback} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {ScreenTypes} from '@/types/navigate'

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const HomeScreen = ({navigation}: ScreenTypes) => {
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
