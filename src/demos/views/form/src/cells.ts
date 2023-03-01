export const fields = [
  {
    formKey: 'username',
    label: 'Username',
    rules: [
      { name: 'required', message: 'Please input your username!' }
    ]
  },

  {
    name: 'select',
    formKey: 'country',
    label: 'Country',
    items: [
      { label: 'Singapore', value: 'singapore' },
      { label: 'Japan', value: 'japan' }
    ],
    rules: [
      { name: 'required', message: 'Please select your country!' }
    ]
  },

  {
    name: 'date',
    formKey: 'date',
    label: 'Date'
  },

  {
    name: 'range',
    formKey: 'range',
    label: 'Range'
  },

  {
    name: 'switch',
    formKey: 'switch',
    label: 'Switch'
  },

  {
    name: 'radioGroup',
    formKey: 'gender',
    label: 'Gender',
    items: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ]
  },

  {
    name: 'checkboxGroup',
    formKey: 'major',
    label: 'Major',
    groupConfig: {
      direction: 'horizontal'
    },
    items: [
      { label: 'Education', value: 'education' },
      { label: 'Philosophy', value: 'philosophy' },
      { label: 'Economics', value: 'economics' },
      { label: 'Law', value: 'law' },
      { label: 'Journalism', value: 'journalism' },
      { label: 'History', value: 'history' }
    ]
  },

  {
    name: 'checkbox',
    formKey: 'agree',
    default: () => {
      return 'I agree that nifty-vadmin is awesome'
    },
    rules: [
      { name: 'required', message: 'Please select agree!' }
    ]
  }
]

export const layoutFields = [
  {
    formKey: 'account',
    label: 'Account'
  },

  {
    formKey: 'password',
    label: 'Password',
    type: 'password'
  }
]

export const dialogFields = [
  {
    formKey: 'name',
    label: 'Name'
  },

  {
    formKey: 'email',
    label: 'Email',
    rules: [
      { name: 'email', message: 'Email is not a valid email!' }
    ]
  },

  {
    name: 'inputNumber',
    formKey: 'age',
    label: 'Age'
  },

  {
    name: 'textarea',
    formKey: 'summary',
    label: 'Summary',
    rows: 4
  }
]