import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'LayoutContent',

  setup() {
    return () => (
      <div className="pa-4 layout-content">
        <router-view></router-view>
      </div>
    )
  }
})