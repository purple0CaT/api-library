export const state = () => ({
  theme_mode: 'light',
  user: {
    id: 1,
    firstName: 'Ian',
    lastName: 'Shtern',
    email: 'email@mail.com',
    api_key: 'asldkjhasd019823lkasd',
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
