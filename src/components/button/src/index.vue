<script lang="ts" setup>
  const emits = defineEmits(['click'])

  const handleClick = (event: Event) => {
    emits('click', event)
  }
</script>

<template>
  <button class="v-btn" @click="handleClick">
    <span class="v-btn__content">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
  @import "./index.scss";
</style>