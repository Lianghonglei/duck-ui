<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>

export default {
  name: 'GIcon',
  props: ['name'],
  data() {
    return {

    }
  }
}
</script>


<style lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
