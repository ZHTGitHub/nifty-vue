<script lang="ts" setup>
  import Basic from './usage/basic.vue'
  import Layout from './usage/layout.vue'
  import Dialog from './usage/dialog.vue'
</script>

<template>
  <div class="demo">
    <div class="pt-3 pb-1 px-4 bg-white">
      <h4 class="text-h4">Form 表单</h4>
    </div>

    <div class="pa-4">
      <Basic />
      <Layout />
      <Dialog />
    </div>
  </div>
</template>