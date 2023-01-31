import axiosClient from '../axiosClient';

export function filterMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setFilteredMeals', data.meals)
    })
}