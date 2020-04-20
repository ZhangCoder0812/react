import React from 'react'
import TodoItem from "./TodoItem";
import { Input ,Button } from 'antd';

const TodoListUI = (props)=>{
    return(
        <div style={{margin:'10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleChangeInputValue}
                />
                <Button  onClick={props.handleBtnClick} type="primary">提交</Button>
            </div>
            <TodoItem item={props.list}/>
        </div>
    )
}


export default TodoListUI
