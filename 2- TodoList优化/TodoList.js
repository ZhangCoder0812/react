import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends  Component{
   constructor(props){
       super(props)
       this.state={
           inputValue:'',
           list:[]
       }
       this.handleInputChange=this.handleInputChange.bind(this)
       this.handleBtnClick=this.handleBtnClick.bind(this)
       this.handleItemClick=this.handleItemClick.bind(this)
   }
   render(){
       return (
           <Fragment>
               <div >

                   <label htmlFor="insertArea">请输入内容</label>
                   <input
                       id='insertArea'
                       className='input'
                       onChange={this.handleInputChange}
                       value={this.state.inputValue}
                       type="text"/>
                   <button onClick={this.handleBtnClick}>提交</button>
               </div>
               <ul>
                   { this.getTodoItem()}
               </ul>
           </Fragment>
       );
   }
   getTodoItem(){
     return  this.state.list.map((item,index)=>{
           return (
               <div  key={index}>
                   <TodoItem
                       item={item}
                       index={index}
                       deleteItem={this.handleItemClick.bind(this)}
                   />
               </div>
           )
       })
   }
    handleInputChange(e){
       const value=e.target.value
        this.setState(()=>({
                inputValue:value
          }))
    }
    handleBtnClick(){
       //prevState表示之前的数据
        this.setState((prevState)=>({
            list:[...prevState.list,this.state.inputValue],
            inputValue:''
        }))
    }
    handleItemClick(index){
        this.setState((prevState)=>{
            const {list} = prevState
            list.splice(index,1)
            return {list}
        })

    }
}

export default TodoList;
