import React , {Component} from  'react'
import {  List} from 'antd';
import store from './store' // 引入store
import {DELETE_TODO_ITEM} from './store/actionsTypes'
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return(
            <div>
                <List
                    style={{width:'300px',marginTop:'10px'}}
                    bordered
                    dataSource={this.props.item}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this,index)}>
                            {item}
                        </List.Item>)}
                />
            </div>
        )
    }
    handleItemDelete=(index)=>{
        const action={
            type:DELETE_TODO_ITEM,
            index:index
        }
        store.dispatch(action)
    }

}

export default  TodoItem
