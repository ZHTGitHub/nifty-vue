import { defineComponent, ref } from 'vue'
import { Layout } from 'ant-design-vue'
import LayoutHeader from './header';
import LayoutSidebar, { type Item } from './sidebar'
import LayoutContent from './content'


export default defineComponent({
  setup() {
    const items = ref<Item[]>([
      {
        title: '通用',
        items: [
          {
            name: 'Button 按钮',
            path: '/components/button'
          }
        ]
      },
  
      {
        title: '数据录入',
        items: [
          {
            name: 'Checkbox 复选框',
            path: '/components/checkbox'
          },
  
          {
            name: 'DatePicker 日期选择器',
            path: '/components/datePicker'
          },

          {
            name: 'Editor 富文本框',
            path: '/components/editor'
          },
  
          {
            name: 'Form 表单',
            path: '/components/form'
          },

          {
            name: 'Input 输入框',
            path: '/components/input'
          },
  
          {
            name: 'Radio 单选框',
            path: '/components/radio'
          },
  
          {
            name: 'Select 选择器',
            path: '/components/select'
          },
  
          {
            name: 'Switch 开关',
            path: '/components/switch'
          },
  
          {
            name: 'Upload 上传',
            path: '/components/upload'
          }
        ]
      },

      {
        title: '反馈',
        items: [
          {
            name: 'Dialog 对话框',
            path: '/components/dialog'
          },

          {
            name: 'Popup 提示弹框',
            path: '/components/popup'
          }
        ]
      }
    ])

    return () => (
      <Layout hasSider>
        <LayoutSidebar title="Nifty-vadmin" items={ items.value }/>

        <Layout>
          <LayoutHeader />
          <LayoutContent />
        </Layout>
      </Layout>
    )
  }
})