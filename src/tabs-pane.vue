<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GTabsPane',
  inject:['eventBus'],
  data(){
    return {
      active: false
    }
  },
  props:{
    name:{
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
  created(){
    this.eventBus.$on('update:selected', (name) => {
      if(name === this.name){
        this.active = true
      }else {
        this.active = false
      }
    })
  }

  
}
</script>

<style scoped lang="scss">
.tabs-pane{
  &.active{
    background: chartreuse;
  }
}

</style>