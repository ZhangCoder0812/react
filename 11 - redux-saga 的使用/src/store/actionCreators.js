import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INTI_LIST} from "./actionsTypes";



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

const getInitList=()=>({
    type:GET_INTI_LIST,
})

export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    initListAction,
    getInitList,

}
