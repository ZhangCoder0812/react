
// 这个文件中导出的函数必须是generator函数

import {takeEvery,put} from 'redux-saga/effects' //引入takeEvery方法去捕获每一次派发的action， 引入put去派发action
import {GET_INTI_LIST} from './actionsTypes'
import axios from "axios";
import {initListAction} from './actionCreators'

function* mySage() {

    // 表示接受到GET_INTI_LIST这个类型的action后 就会执行 getInitListData 方法
  yield takeEvery(GET_INTI_LIST,getInitListData)

}

function* getInitListData() {
    try{
        const res=yield axios.get('http://localhost:4000/list')
        const action=initListAction(res.data)
        yield put(action) // 这里可以直接使用put派发action ，就不用使用dispatch了
    }catch (e) {
        console.log('error...')
    }
}

export default  mySage
