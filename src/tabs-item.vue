<template>
  <div class="tabs-item" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTabsItem',
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      require: true
    }
  },
  computed:{
    classes(){
      return {
        active: this.active
      }
    }
  },
  inject: ['eventBus'],
  methods: {
    xxx(){
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  mounted() {
    //监听
    this.eventBus.$on('update:selected', (name) => {
      if (name === this.name) {
        this.active = true
      }else {
        this.active = false
      }
    })
  }


}
</script>

<style scoped lang="scss">
$blue:blue;

.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height:100%;
  display: flex;
  align-items:center;
  &.active{
    color:$blue;
    font-weight: bold;
  }
}
</style>