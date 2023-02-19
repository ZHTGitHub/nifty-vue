import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import './style.scss'

interface Item {
  title?: string;
  items: {
    icon?: string;
    name: string;
    path?: string;
  }[]
}

export default defineComponent({
  name: 'ZSidebar',

  props: {
    items: {
      type: Array as PropType<Item[]>,
      default: () => ([])
    }
  },

  setup(props) {
    return (
      <nav>
        <header class="header"></header>
        <div class="content">
          {
            props.items.map(item => {
              return (
                <ul className="nav-main">
                  { item.title && <li className="head">{ item.title }</li> }

                  {
                    item.items.map(iItem => {
                      return (
                        <li className="item">
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