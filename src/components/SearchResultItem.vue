<template>
  <article class="search-item">
    <img :src="require(`@/assets/${image}`)" :alt="`${title} picture`" class="picture">
    <div class="info">
      <h4 class="title">{{ title }}</h4>
      <mark v-for="(label, index) in healthLabels" :key="index" class="tag">#{{ label }}</mark>
    </div>
    <p class="extra-info">
      <strong>Servings:</strong> {{ servings }}
    </p>
  </article>
</template>

<script>
  export default {
    name: 'SearchResultItem',
    props: ['image', 'title', 'healthLabels', 'servings']
  }
</script>

<style lang="scss" scoped>
  .search-item {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: minmax(50px, 200px) 1fr auto;
    padding: 20px 0 ;
    border-bottom: 1px #666 solid;
    align-items: center;
  }
  .picture {
    width: 100%;
  }
  .title {
    margin: 0 0 10px;
    color: #b8053b;
    font-family: SignikaBold;
    font-size: 20px;
  }
  .tag {
    background: #d682a8;
    color: #333;
    padding: 2px 4px;
    border-radius: 4px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
  }
</style>