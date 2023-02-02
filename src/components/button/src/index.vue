<script lang="ts" setup>
  const emits = defineEmits(['click'])

  const handleClick = (event: Event) => {
    emits('click', event)
  }
</script>

<template>
  <a-button 
    type="primary"
    @click="handleClick"
  >
    <slot></slot>
  </a-button>
</template>

<style lang="scss" scoped>
  @import "./index.scss";
</style>