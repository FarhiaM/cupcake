<template>
  <div class="option">
    <slot name="title"></slot>
    <slot name="paragraph"></slot>
    <slot name="list"></slot>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'Option'
}
</script>

<style scoped>

</style>
