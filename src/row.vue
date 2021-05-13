<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    gutter:{
      type: [Number, String],
      default: 0
    },
    align:{
      type: String,
      validator (value) {
        return ['left', 'right', 'center'].includes(value)
      }
    },
    
  },
  computed:{
    rowStyle() {
      return {
        marginLeft: -this.gutter/2 + 'px',
        marginRight: -this.gutter/2 + 'px'
      }
    },
    rowClass() {
      let {align} = this
      console.log(align)
      return [align && `align-${align}`]
    }
  },
  mounted(){
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
.row{
  display: flex;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-right{
    justify-content: flex-end;
  }
  &.align-end{
    justify-content: center;
  }
}

</style>