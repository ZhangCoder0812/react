import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from "./actionsTypes";

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


export {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
}
