import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION} from "./actionsTypes";
import axios from "axios";


const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

const getAddItemAction=()=>({
    type:ADD_TODO_ITEM,
})

const getDeleteItemAction=(value)=>({
    type:DELETE_TODO_ITEM,
    value
})

const initListAction=(value)=>({
    type:INIT_LIST_ACTION,
    value
})

const getTodoList=()=>{

   return (dispatch)=>{ // 这里参数可以接受dispatch ，直接使用就行了
       axios.get('http://localhost:4000/list').then((res)=>{
           const {data} = res
           const action=initListAction(data)
           // 这里的action是一个对象 可以直接派发
           dispatch(action)
       })
   }
}

export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    initListAction,
    getTodoList,
}
