export default {
    update_name(state, msg) {
        state.name = msg;
    },
    UPDATE_CITY(state,data){
        state.city = data;
    },
    UPDATE_CITY_STATE(state,data){
        state.city_state = data;
    }
}