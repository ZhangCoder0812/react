import React , {Component} from "react";
import { Input ,Button } from 'antd';
import TodoItem from './TodoItem'
import store from './store' // 引入store
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM} from './store/actionsTypes'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState() // 通过store获取reducer中数据
        store.subscribe(this.handleStore) // 监听redux中 数据改变
     }
    render() {
        return(
            <div style={{margin:'10px'}}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.handleChangeInputValue}
                    />
                    <Button  onClick={this.handleBtnClick} type="primary">提交</Button>
                </div>
                <TodoItem item={this.state.list}/>
            </div>
        )
    }
    handleChangeInputValue=(e)=>{
        e.persist()
        const action={
            type:CHANGE_INPUT_VALUE, // 事件描述
            value:e.target.value       // 新值
        }
        store.dispatch(action)   // 派发
    }
    handleBtnClick=()=>{
        const action={
            type: ADD_TODO_ITEM
        }
        store.dispatch(action)
    }
    handleStore=()=>{
        this.setState(()=>(store.getState()))
    }
}

export  default  TodoList
