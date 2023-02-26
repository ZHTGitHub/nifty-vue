const feedback = [
  {
    path: 'dialog',
    name: 'dialogPage',
    component: () => import('@/demos/views/dialog')
  },

  {
    path: 'popup',
    name: 'popupPage',
    component: () => import('@/demos/views/popup')
  }
]

export default feedback