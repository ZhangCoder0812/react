import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionsTypes'

const defaultState={
    inputValue:'123',
    list:['wade','kobe','lbj']
}

export default (state=defaultState,action)=>{
    // state 是每次改变之前的state
    console.log(state);

    // 通过type值实现对应派发的action
    if(action.type===CHANGE_INPUT_VALUE) {
        // 对之前的state深拷贝 reducer可以接受state 但不能改变state
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if(action.type===ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }


    if(action.type===DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }


    return state
}
