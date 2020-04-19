import React, {Component, Fragment} from 'react';
import './style.css'

class TodoList extends  Component{
   constructor(props){
       super(props) // super指的是父类Component 的构造函数
       this.state={ // 数据定义在state中，组件的状态
           inputValue:'',
           list:[]
       }
   }
   render(){
       return (
           <Fragment>
               <div >
                   {/* 使用className代替class ，htmlFor自动聚焦光标*/}
                   <label htmlFor="insertArea">请输入内容</label>
                   <input
                       id='insertArea'
                       className='input'
                       onChange={this.handleInputChange.bind(this)}
                       value={this.state.inputValue}
                       type="text"/>
                   <button onClick={this.handleBtnClick.bind(this)}>提交</button>
               </div>
               <ul>
                   {
                       this.state.list.map((item,index)=>{
                       return (
                           <li
                               key={index}
                               onClick={this.handleItemClick.bind(this,index)}
                               dangerouslySetInnerHTML={{__html:item}}
                           >
                           </li>
                       )
                       })
                   }
               </ul>
           </Fragment>
       );
   }
   //定义自己的方法
    handleInputChange(e){
       // 改变state中的数据 必须使用setState方法 类似于小程序
        //不能直接 this.state.inputValue=e.target.value
        this.setState({
            inputValue:e.target.value
        })
    }
    handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleItemClick(index){
       const {list} = this.state
        list.splice(index,1)
        this.setState({
            list
        })
        // 现将数据保留一份 然后再赋值
        //不推荐直接修改state中的数据 这是react中immutable的概念
    }
}

export default TodoList;
