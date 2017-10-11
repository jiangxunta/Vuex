export default{
    num(state){
        return state.num;
    },
    getOdd(state){
        return state.num%2==0?'偶数':'奇数';
    }
}
