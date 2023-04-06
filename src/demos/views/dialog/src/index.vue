<script lang="ts" setup>
  import { ref, type Ref } from 'vue'
  const dialog: Ref = ref()

  const handleOpen = () => {
    dialog.value.onOpen()
  }
</script>

<template>
  <a-button @click="handleOpen">打开</a-button>

  <z-dialog
    ref="dialog"
    title="标题"
    :show-confirm-button="false"
    cancel-text="关闭"
  >
    <div>23</div>
  </z-dialog>
</template>