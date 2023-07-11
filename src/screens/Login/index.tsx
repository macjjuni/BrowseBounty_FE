import React, {useCallback} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {type ParamListBase} from '@react-navigation/native'

// export type RootStackParamList = {
//   Home: undefined
//   Login: undefined
// }
type LoginScreenTypes = NativeStackScreenProps<ParamListBase, 'Login'>

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const LoginScreen = ({navigation}: LoginScreenTypes) => {
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
