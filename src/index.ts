import axios from 'axios'

const templateTags = [
  {
    name: 'ethosAccessToken',
    displayName: 'Ethos Access Token',
    description: 'Get the access token from Ethos.',
    args: [
      {
        displayName: 'Application Secret',
        description: 'Secret created on Ellucian Ethos.',
        type: 'string',
        placeholder: '00000000-0000-0000-0000-000000000000',
      },
      {
        displayName: 'Auth Endpoint',
        description: 'Ellucian Ethos Auth Endpoint.',
        type: 'string',
        placeholder: 'https://auth.ellucian.com/auth',
        defaultValue: 'https://integrate.elluciancloud.com/auth',
      },
    ],
    async run(context, appSecret: string, authEndpoint: string) {
      if (!appSecret) throw new Error('Application Secret is required.')
      if (!authEndpoint)
        throw new Error(
          'Auth Endpoint is required, defaulting to https://integrate.elluciancloud.com/auth',
        )
      const access_token = await getAccessToken(appSecret, authEndpoint)
      return access_token
    },
  },
]

const getAccessToken = async (
  appSecret: string,
  authEndpoint: string,
): Promise<string> => {
  try {
    const instance = axios.create({
      baseURL: authEndpoint,
      timeout: 1000,
      headers: {
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${appSecret}`,
      },
    })

    const { data: access_token } = await instance.post('')

    return access_token
  } catch (error) {
    throw new Error(error.message)
  }
}

export { templateTags }
