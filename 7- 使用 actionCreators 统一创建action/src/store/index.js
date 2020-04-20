import {createStore} from 'redux' // 引入创建store对象的方法
import reducer from './reducer'   // 引入reducer

const store =   createStore(reducer) // 传入reducer 并执行性reducer

export default store
