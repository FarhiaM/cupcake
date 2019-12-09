import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipe: null,
        error: null
    },
    getters: {
        resultList: state => state.recipe,
    },
    mutations: {
        SET_RESULT_DATA(state, data) {
            state.error = false;
            state.recipe = data;
        },
        SET_ERROR(state, data) {
            state.recipe = null;
            state.error = data;
        },
    },
    actions: {
        async getResultList({ commit }, searchText) {
            try {
                const data = await this.$axios.get('/search', {
                    params: {
                        q: searchText
                    }
                }).then(response => (state = response.data.hits));
                if (data.length > 0) {
                    commit('SET_RESULT_DATA', data);
                } else {
                    commit('SET_ERROR', `No data returned`);
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
})