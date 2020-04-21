import React , {Component } from  'react'

import {connect} from 'react-redux' // 通过connect 获取store

class TodoList extends Component{
    render() {

        return(
           <div>
               <div>  {/* 直接通过props来取store中数据 因为下面做了映射  */}
                   <input   value={this.props.inputValue} onChange={this.props.changeInputValue} />
                   <button onClick={this.props.handleClick}>提交</button>
               </div>
               <ul>
                   {
                       this.props.list.map((item,index)=>(
                                        // 写成函数的形式可以在括号内传值 不然直接写括号会立即执行
                           <li onClick={()=>{this.props.handleDelete(index)}} key={index}>{item}</li>
                       ))
                   }
               </ul>
           </div>
        )
    }
}

//  把store中的数据映射给组件 作为组件的props
//       state 为组件中的数据
const  mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

// 将store 的 dispatch方法挂载到 props上
//  通过 this.props 来触发 dispatch
const mapDispatchToProps=(dispatch)=>{
    return {
        changeInputValue(e){
            const action={
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action={
                type:'add_item',
            }
            dispatch(action)
        },
        handleDelete(index){
            const action={
                type:'delete_item',
                value: index
            }
            dispatch(action)
        }
    }
}

          // 让这个组件和store做连接
          // 使用 mapStateToProps,mapDispatchToProps 作为映射规则
export default  connect(mapStateToProps,mapDispatchToProps)(TodoList)
