<template>
  <div class="search-field">
    <label for="search-input" class="search-label"> Search for your favorite dessert</label>
    <input type="search" name="search-input" id="search-input" class="search-input" @keypress.enter="sendSearchInput">
  </div>
</template>

<script>
  export default {
    name: 'SearchField',
    methods: {
      sendSearchInput(event) {
        console.log('this is the event', event.target.value)
        if(event.target.value) {
          this.$emit('search', event.target.value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-field {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-gap: 10px;
  }
</style>
