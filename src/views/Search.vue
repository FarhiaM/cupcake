<template>
  <main class="search">
    <search-field
      @search="getSearchResults"
    />
    <!-- @search is a coustomized event -->
    <section class="search-results">
      <search-result-item v-for="result in results" :key="result.recipe.uri" :image="result.recipe.image" :title="result.recipe.label" :health-labels="result.recipe.healthLabels" :servings="result.recipe.yield" />
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
            recipe: {
              image: 'cupcakes_cookies.png',
              label: 'Chocolate Cupckacke',
              yield: 2, // servings
              calories: 2,
              uri: 'a',
              healthLabels: ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free']
            }
          },
          {
            recipe: {
              image: 'cupcakes_cookies.png',
              label: 'Chocolate Cupckacke',
              yield: 2, // servings
              calories: 2,
              uri: 'b',
              healthLabels: ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free']
            }
          }
        ]
      }
    },
    beforeCreate (){
      // console.log('APP key', process.env, this)
    },
    mounted (){

    },
    methods: {
      getSearchResults (searchText) {
        this.$axios.get('/api', {
          params: {
            q: searchText
          }
        }).then(function(response) {
          console.log("API response", response.data.results)
          if(response.data.results && response.data.results.length > 0) this.results = response.data.results
        })
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
