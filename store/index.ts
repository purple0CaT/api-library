export const state = () => ({
  theme_mode: 'light',
  user: {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    api_key: '',
  },
  token: {
    accessToken: '',
  },
})

export const mutations = {
  handleTheme: (state: any) => {
    if (state.theme_mode === 'light') {
      state.theme_mode = 'dark'
    } else {
      state.theme_mode = 'light'
    }
  },
}
