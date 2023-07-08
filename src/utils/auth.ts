interface ILogin {
  id: string
  password: string
}

interface IToken {
  accessToken: string
  refreshToken: string
}

const auth = {
  getToken: async (loginData: ILogin): Promise<IToken | null> => {
    console.log(loginData)
    return {accessToken: 'access token!', refreshToken: 'refresh Token!'}
  },
  clearToken: () => {},
  refreshToken: () => {},
}

export default auth
