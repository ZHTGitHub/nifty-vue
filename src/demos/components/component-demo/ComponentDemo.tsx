import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ComponentDemo',

  props: {
    title: {
      type: String as PropType<string>
    },

    description: {
      type: String as PropType<string>
    }
  },

  setup(props, { slots }) {
    return () => (
      <div className="mb-4 b-all rounded-sm bg-white component-demo">
        <div className="actions">
          <div className="pa-4 b-bottom header"></div>
          <div className="content"></div>
        </div>

        <section className="px-8 pt-4 text-black summary">
          <div className="title">{ props.title }</div>
          <div className="py-2 description">{ props.description }</div>
        </section>

        <section className="pa-8 component-demo">
          { slots.default?.() }
        </section>
      </div>
    )
  }
})