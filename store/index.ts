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
  easter_egg: false,
})

export const mutations = {
  handleTheme: (state: any) => {
    if (state.theme_mode === 'light') {
      state.theme_mode = 'dark'
    } else {
      state.theme_mode = 'light'
    }
  },
  handleEasterEgg(state: any) {
    if (state.easter_egg) {
      state.easter_egg = false
    } else {
      state.easter_egg = true
    }
  },
  handleHideEasterEgg(state: any) {
    state.easter_egg = false
  },
}
