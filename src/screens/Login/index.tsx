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

const LoginScreen = ({navigation}: ScreenTypes) => {
  const onClick = useCallback(() => {
    navigation.navigate('Home')
  }, [navigation])
  return (
    <View style={style.view}>
      <TouchableOpacity onPress={onClick}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
