export default {
    update_city(state,data) {
        state.commit('UPDATE_CITY',data);
    },
    update_city_state(state,data) {
        state.commit('UPDATE_CITY_STATE',data);
    }
}