import type { FunctionalComponent } from 'vue'
import classNames from './classNames'

interface FormInputMessagesProps {
  errorMessage?: string;
}

const FormInputMessages: FunctionalComponent<FormInputMessagesProps> = (props, { attrs }) => {
  const { errorMessage } = { ...props, ...attrs }
  
  const messagesClassName = classNames('z-messages')

  return (
    <div class={ messagesClassName }>
      <div class="error-message">{ errorMessage }</div>
    </div>
  )
}

export default FormInputMessages