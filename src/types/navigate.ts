import {NativeStackScreenProps} from '@react-navigation/native-stack'

export type ScreenNameTypes = 'Home' | 'Login'

type RootStackParamList = {
  Home: undefined
  Login: undefined
}

export type ScreenTypes = NativeStackScreenProps<RootStackParamList, ScreenNameTypes>
