import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'

// Provider 是react-redux核心组件
import {Provider} from 'react-redux'
import store from './store'

const App=(

    // 通过Provider 提供器将 store 传递给内部所有的组件
     // 组件内通过 connect 来使用 store
    <Provider store={store}>
       <TodoList />
    </Provider>
)

             //将App作为组件传入
ReactDOM.render(App, document.getElementById('root'));


