import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { ZLayout } from '../layouts'
import basic from './modules/basic'
import input from './modules/input'
import feedback from './modules/feedback'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/components',

    children: [
      {
        path: 'components',
        name: 'Components',
        redirect: '/components/button',
        component: ZLayout,

        children: [
          ...basic,
          ...input,
          ...feedback
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router