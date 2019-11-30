<template>
  <main class="search">
    <search-field />
    <section class="search-results">
      <search-result-item v-for="result in results" :key="result.uri" :image="result.image" :title="result.label" :health-labels="result.healthLabels" :servings="result.yeld" />
    </section>
  </main>
</template>

<script>
import SearchField from '@/components/SearchField'
import SearchResultItem from '@/components/SearchResultItem'
  export default {
    name: 'Search',
    components: {
      SearchField,
      SearchResultItem
    },
    data () {
      return {
        results: [
          {
            image: 'img/logo.png',
            label: 'Chocolate Cupckacke',
            yeld: 2, // servings
            calories: 2,
            healthLabels: ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free'],
          },
          {
            image: 'img/logo.png',
            label: 'Chocolate Cupckacke',
            yeld: 2, // servings
            calories: 2,
            healthLabels: ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free'],
          },
          {
            image: 'img/logo.png',
            label: 'Chocolate Cupckacke',
            yeld: 2, // servings
            calories: 2,
            healthLabels: ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free'],
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    padding: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: auto auto;
  }
</style>