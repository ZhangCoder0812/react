import React , {Component} from "react";
import store from './store'
import {getInputChangeAction, getAddItemAction, getInitList} from './store/actionCreators'
import TodoListUI from  './TodoListUI'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState()
        store.subscribe(this.handleStore)
     }
    render() {
        return <TodoListUI
                  inputValue={this.state.inputValue}
                  list={this.state.list}
                  handleChangeInputValue={this.handleChangeInputValue}
                  handleBtnClick={this.handleBtnClick}
                />
    }
    componentDidMount() {

        const action=getInitList()
        store.dispatch(action)

        // 使用了redux-saga 后不仅reducer可以接受这个action
        // saga.js 也可以接受这个action


    }

    handleChangeInputValue=(e)=>{
        e.persist()
        const action=getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick=()=>{
        const action=getAddItemAction()
        store.dispatch(action)
    }
    handleStore=()=>{
        this.setState(()=>(store.getState()))
    }
}

export  default  TodoList
