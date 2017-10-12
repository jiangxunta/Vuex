## Vuex

### State

> State负责存储整个应用的状态数据，一般需要在使用的时候在跟节点注入store对象，后期就可以使用this.$store.state直接获取状态

### Mutations

> Mutations的中文意思是“变化”，利用它可以更改状态，本质就是用来处理数据的函数，其接收唯一参数值state

### Actions

> Actions也可以用于改变状态，不过是通过触发mutation实现的，重要的是可以包含异步操作，其辅助函数是mapActions

### Getters

> 有些状态需要做二次处理，就可以使用getters，其接收唯一参数值state
