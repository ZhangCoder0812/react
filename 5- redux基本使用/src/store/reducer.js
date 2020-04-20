const defaultState={
    inputValue:'123',
    list:['wade','kobe','lbj']
}

export default (state=defaultState,action)=>{
    // state 是每次改变之前的state
    console.log(state);

    // 通过type值实现对应派发的action
    if(action.type==='change_input_value') {
        // 对之前的state深拷贝 reducer可以接受state 但不能改变state
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if(action.type==='add_list'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }


    if(action.type==='delete_todo_item'){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }


    return state
}
