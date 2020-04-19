import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'
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
       console.log('constructor ')
   }

   /* componentWillMount(){
       console.log('componentWillMount ')
    }*/

    render(){

        return (
           <Fragment>
               <div >

                   <label htmlFor="insertArea">请输入内容</label>
                   <input
                       ref={(a)=>{this.input=a}}
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

   componentDidMount(){
        axios.get('/api/test').then(()=>{
            console.log('成功')
        }).catch(()=>{
            console.log('失败')
        })
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate ')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate ')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate ')
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
       // e.target 是元素节点
       // 也可以使用 this.input.value 获取值
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
