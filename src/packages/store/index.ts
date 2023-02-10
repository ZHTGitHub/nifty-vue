import { createPinia } from 'pinia'
import useFormStore, { type FormParams } from './form'

const pinia = createPinia()

export { useFormStore, FormParams }
export default pinia