import React , {Component} from  'react'
import {  List} from 'antd';
import store from './store' // 引入store
 import {getDeleteItemAction} from './store/actionCreators'
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
                        <List.Item onClick={(index)=>{this.handleItemDelete(index)}}>
                            {item}
                        </List.Item>)}
                />
            </div>
        )
    }
    handleItemDelete=(index)=>{
        const action=getDeleteItemAction(index)
        store.dispatch(action)
    }

}

export default  TodoItem
