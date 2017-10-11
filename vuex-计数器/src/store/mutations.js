import {INCREMENT,DECREMENT} from './types'
import getters from './getters'

const state = {
    num:10
}

const mutations = {
    [INCREMENT](state){
        state.num++;
    },
    [DECREMENT](state){
        state.num--;
    }
}
export default{
    state,
    mutations,
    getters
}
