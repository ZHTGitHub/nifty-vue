import { defineComponent, useAttrs } from 'vue'
import { capsule } from '../../props'
import { formProps } from '../props'
import { useFormDefaultValue, useFormValue } from '../_utils/useForm'

export default defineComponent({
  name: 'ZInput',

  props: {
    ...formProps(),
    capsule
  },

  setup(props) {
    const attrs = useAttrs()

    const value = useFormValue(props.formId, props.formKey)

    return () => {
      const classNames = function(...args: any[]) {
        console.log(args)
      }

      console.log(props.capsule)

      classNames('z-input')

      return (
        <div class={['z-input', capsule]}>
          <a-input 
            v-bind={ attrs }
          />
        </div>
      )
    }
  }
})