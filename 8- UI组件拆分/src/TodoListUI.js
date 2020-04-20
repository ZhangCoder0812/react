import React,{Component} from 'react'
import TodoItem from "./TodoItem";
import { Input ,Button } from 'antd';


class TodoListUI extends Component{
    render() {
        return(
            <div style={{margin:'10px'}}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.props.handleChangeInputValue}
                    />
                    <Button  onClick={this.props.handleBtnClick} type="primary">提交</Button>
                </div>
                <TodoItem item={this.props.list}/>
            </div>
        )
    }
}

export default TodoListUI
