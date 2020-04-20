import React , {Component} from "react";
import { Input ,Button } from 'antd';
import TodoItem from './TodoItem'
import store from './store'
import {getInputChangeAction,getAddItemAction} from './store/actionCreators'

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
