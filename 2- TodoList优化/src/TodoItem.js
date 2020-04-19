import React ,{Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleItemClick=this.handleItemClick.bind(this) // 改变this指向
    }
    render(){
        const  {item} = this.props
        return (
            <div
                onClick={this.handleItemClick}>
                {item}
            </div>
        )
    }
    handleItemClick(){
        const  {index,deleteItem} = this.props
        deleteItem(index)//调用父组件方法
    }
}

export  default  TodoItem