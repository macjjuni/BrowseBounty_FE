import AsyncStorage from '@react-native-async-storage/async-storage'

interface IData {
  data: string
}

// 이후 저장할 데이터별로 함수 만들어 사용하기
const storage = {
  setData: async (key: string, data: IData): Promise<boolean> => {
    try {
      const jsonData = JSON.stringify(data)
      await AsyncStorage.setItem(key, jsonData)
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  },
  getData: async (key: string): Promise<IData | boolean> => {
    try {
      const jsonData: string | null = await AsyncStorage.getItem(key)
      if (jsonData !== null) {
        return JSON.parse(jsonData)
      }
      throw new Error('value is null')
    } catch (e) {
      console.error(e)
      return false
    }
  },
  checkKey: async (key: string): Promise<boolean> => {
    try {
      const keys = await AsyncStorage.getAllKeys(key)
      return keys.includes(key)
    } catch (e) {
      console.error(e)
      return false
    }
  },
}

export default storage
