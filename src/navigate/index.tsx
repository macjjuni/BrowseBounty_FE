import HomeScreen from '@/screens/Home'
import LoginScreen from '@/screens/Login'
import MyPageScreen from '@/screens/MyPage'
import {NativeStackNavigationOptions} from '@react-navigation/native-stack'

interface INavigate {
  name: string
  options?: NativeStackNavigationOptions
  component: any
}

const navigates: INavigate[] = [
  {
    name: 'Home',
    options: {headerShown: false},
    component: HomeScreen,
  },
  {
    name: 'Login',
    options: {headerShown: false},
    component: LoginScreen,
  },
  {
    name: 'MyPage',
    options: {headerShown: false},
    component: MyPageScreen,
  },
]

export default navigates
