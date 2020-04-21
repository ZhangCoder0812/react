import {createStore,applyMiddleware} from 'redux' //applyMiddleware  引入中间件
import reducer from './reducer'

import TodoSagas from  './saga' // 导入自己的saga文件 里面是你的异步请求
import createSagaMiddleware from 'redux-saga' // 引入redux-saga中的createSagaMiddleware方法



const sagaMiddleware = createSagaMiddleware() // 执行创建中间的方法 创建saga中间件

const store =   createStore(reducer,applyMiddleware(sagaMiddleware)) // store使用中间件

sagaMiddleware.run(TodoSagas)//运行导入saga文件

export default store
