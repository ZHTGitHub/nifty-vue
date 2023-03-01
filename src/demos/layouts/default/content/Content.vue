<script lang="ts" setup>

</script>

<template>
  <div className="layout-content">
    <router-view>
      <template #default="{ Component, route }">
        <transition name="slide-fade" mode="out-in" appear>
          <keep-alive>
            <div :key="route.name">
              <component :is="Component" :key="route.fullPath" />
            </div>
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </div>
</template>

<style lang="scss">
  @import url("./style.scss");
</style>