<template>
  <transition name="slide">
    <div class="sider" v-show="visible">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GSider',
  data() {
    return {
      visible: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 2px;
    right: 2px;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to {
  // 宽度的获取未解决 
  margin-left: -200px; 
}
</style>
