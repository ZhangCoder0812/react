import React ,{Component} from 'react'
import PropTypes from 'prop-types' // 引入数据类型检测的包

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleItemClick=this.handleItemClick.bind(this) // 改变this指向
    }

   shouldComponentUpdate( nextProps,nextState ){
      // nextProps表示变化后的props数据 nextState表示变化后的state数据
       if(nextProps.item==this.props.item){
           return false
       }else {
           return true
       }
    }

    render(){

        const  {item,test} = this.props
        console.log(item+'----render2 ')
        return (
            <div
                onClick={this.handleItemClick}>
                {item}{test}
            </div>
        )
    }
    handleItemClick(){
        const  {index,deleteItem} = this.props
        deleteItem(index)//调用父组件方法
    }
}

// 对TodoItem的传值类型做限制 没传的时候不做类型检测
// 加上isRequired表示父组件必须传 没传会包错
TodoItem.propTypes={
    item1:PropTypes.arrayOf(PropTypes.number,PropTypes.string),// 表示item1的类型必须是数组 数组组成可以是数字和字符
    item:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),// 表示item的类型既可以是数字型又可以是字符型
    deleteItem:PropTypes.func,  // 函数型
    index:PropTypes.number,     //  数字型
    test:PropTypes.string.isRequired,   // 字符型

}
TodoItem.defaultProps={
    test:''
}


export  default  TodoItem