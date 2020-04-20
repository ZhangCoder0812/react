import React , {Component} from "react";
import { Input ,Button } from 'antd';
import TodoItem from './TodoItem'
import store from './store' // 引入store

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
            type:'change_input_value', // 事件描述
            value:e.target.value       // 新值
        }
        console.log(store.dispatch) // 可以看到为什么reducer中每次拿到的额都是上一次的数据
        store.dispatch(action)   // 派发
    }
    handleBtnClick=()=>{
        const action={
            type: 'add_list'
        }
        store.dispatch(action)
    }
    handleStore=()=>{
        this.setState(()=>(store.getState()))
    }
}

export  default  TodoList
