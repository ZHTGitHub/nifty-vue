import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'LayoutHeader',

  setup() {
    return () => (
      <header className="layout-header"></header>
    )
  }
})