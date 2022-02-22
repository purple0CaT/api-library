import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

// Add a rule.
extend('required', {
  ...required,
  message: 'This field is required',
})
extend('email', {
  ...email,
  message: 'Pass a valid email',
})
extend('password', {
  validate: (value) => {
    var strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )
    return strongRegex.test(value) && value.length > 7
  },
  message:
    'The password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
})
extend('confirmationPass', {
  params: ['target'],
  validate(value, target: any) {
    console.log(value, value === target.target, target)
    return value === target.target
  },
  message: 'Password confirmation does not match',
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
