import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION} from "./actionsTypes";

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

export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    initListAction,
}
