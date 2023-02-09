<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import type { PropType } from 'vue'
  import { Modal } from 'ant-design-vue'
  import { Button } from '../../button'
  import type { PopupType } from './types'

  export default defineComponent({
    name: 'ZPopup',

    props: {
      cancelText: {
        type: String as PropType<string>,
        default: '取消'
      },

      centered: {
        type: Boolean as PropType<boolean>,
          default: true
      },

      confirmText: {
        type: String as PropType<string>,
        default: '确认'
      },

      content: {
        type: String as PropType<string>
      },

      title: {
        type: String as PropType<string>
      },

      type: {
        type: String as PropType<PopupType>
      },

      visible: {
        type: Boolean as PropType<boolean>,
        default: false
      },

      width: {
        type: [String, Number] as PropType<string | number>,
        default: 320
      },

      cancel: {
        type: Function,
        default: () => {}
      },

      confirm: {
        type: Function,
        default: () => {}
      }
    },

    setup(props) {
      const show = ref<boolean>(props.visible)
      
      const handleCancel = () => {
        if(typeof props.cancel === 'function') {
          props.cancel()
          show.value = false
        }
      }

      const handleConfirm = () => {
        if(typeof props.confirm === 'function') {
          props.confirm()
          show.value = false
        }
      }

      return {
        show,
        handleCancel,
        handleConfirm
      }
    },

    components: {
      AModal: Modal,
      ZButton: Button
    }
  })
</script>

<template>
    <a-modal 
      v-model:visible="show" 
      :centered="centered"
      dialogClass="z-popup"
      :footer="null"
      :title="title" 
      :width="width"
      wrapClassName="z-popup"
    >
      <div class="z-popup-header">
        <i class="z-icon" :class="[type && `z-icon-${ type }`]"></i>
        <span class="title">{{ title }}</span>
      </div>

      <div class="z-popup-container">
        {{ content }}
      </div>

      <div class="z-popup-footer">
        <z-button
          class="cancel"
          ghost
          type="primary"
          @click="handleCancel"
        >{{ cancelText }}</z-button>

        <z-button
          type="primary"
          @click="handleConfirm"
        >{{ confirmText }}</z-button>
      </div>
    </a-modal>
</template>

<style lang="scss">
  .z-popup {
    .ant-modal-content {
      margin-bottom: 11.8%;
      border-radius: 4px;

      .ant-modal-header,
      .ant-modal-close {
        display: none;
      }

      .ant-modal-body {
        padding: 0;

        /* 顶部内容 */
        .z-popup-header {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;

          .z-icon {
            margin-right: 4px;
            font-size: 22px;
            font-weight: 500px;

            &.z-icon-info {
              color: #1890ff;
            }

            &.z-icon-success {
              color: #52c41a;
            } 

            &.z-icon-warning {
              color: #faad14;
            } 

            &.z-icon-error {
              color: #ff4d4f;
            } 
          }

          .title {
            line-height: 22px;
            font-size: 16px;
            font-weight: 500;
            word-wrap: break-word;
            color: #000000d9;
          }
        }

        /* 主要内容 */
        .z-popup-container {
          padding: 12px;
          text-align: center;
        }

        /* 底部内容 */
        .z-popup-footer {
          display: flex;
          justify-content: center;
          padding: 12px;

          .cancel {
            margin-right: 8px;
          }
        }
      }
    }
  }
</style>