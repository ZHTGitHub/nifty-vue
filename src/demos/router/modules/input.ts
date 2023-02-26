const input = [
  {
    path: 'checkbox',
    name: 'checkboxPage',
    component: () => import('@/demos/views/checkbox')
  },

  {
    path: 'datePicker',
    name: 'datePickerPage',
    component: () => import('@/demos/views/datePicker')
  },

  {
    path: 'editor',
    name: 'editorPage',
    component: () => import('@/demos/views/editor')
  },

  {
    path: 'form',
    name: 'formPage',
    component: () => import('@/demos/views/form')
  },

  {
    path: 'input',
    name: 'inputPage',
    component: () => import('@/demos/views/input')
  },

  {
    path: 'radio',
    name: 'radioPage',
    component: () => import('@/demos/views/radio')
  },

  {
    path: 'select',
    name: 'selectPage',
    component: () => import('@/demos/views/select')
  },

  {
    path: 'switch',
    name: 'switchPage',
    component: () => import('@/demos/views/switch')
  },

  {
    path: 'upload',
    name: 'uploadPage',
    component: () => import('@/demos/views/upload')
  },
]

export default input