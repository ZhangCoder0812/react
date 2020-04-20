import {createStore,applyMiddleware} from 'redux' //applyMiddleware  引入中间件
import reducer from './reducer'
import thunk from 'redux-thunk'  // 引入 thunk 模块 这个中间件是redux的中间件 并不是react的中间件

// 创建store的时候使用thunk中间件

const store =   createStore(reducer,applyMiddleware(thunk))

export default store
