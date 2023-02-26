import { defineComponent, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { PropType } from 'vue'
import './style.scss'

export interface Item {
  title?: string;
  items: {
    icon?: string;
    name: string;
    path?: string;
  }[]
}

export default defineComponent({
  name: 'LayoutSidebar',

  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: () => ([])
    },

    title: {
      type: String as PropType<string>
    }
  },

  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const selected = ref()

    const navPage = ({ path }: { name: string, path?: string }) => {
      router.push(path)
    }

    watch(route, (route) => {
      selected.value = route.path
    }, { immediate: true })

    return() => (
      <nav class="layout-sidebar">
        <header class="bg-gradual-blue header">
          <span class="title">{ props.title }</span>
        </header>
        <div class="content">
          {
            props.items.map((item, index) => {
              return (
                <ul class="nav-main">
                  { item.title && <li class={ `head ${ !index && 'top' }` }>{ item.title }</li> }

                  {
                    item.items.map(iItem => {
                      return (
                        <li class={ `item ${ iItem.path === selected.value && 'active' }` } onClick={ () => navPage(iItem) }>
                          <i class="icon">{ iItem.icon }</i>
                          <span class="name">{ iItem.name }</span>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            })
          }
        </div>
        <footer class="footer"></footer>
      </nav>
    )
  }
})