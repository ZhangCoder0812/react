import React , {Component} from "react";
import store from './store'
import {getInputChangeAction,getAddItemAction,initListAction} from './store/actionCreators'
import TodoListUI from  './TodoListUI'
import axios from 'axios'
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
        axios.get('http://localhost:4000/list').then((res)=>{
            const {data} = res
            const action=initListAction(data)
            store.dispatch(action)
        })
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
