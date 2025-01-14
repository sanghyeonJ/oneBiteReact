import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';
import { useCallback, useReducer, useRef, useState } from 'react';

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "react공부",
        date: new Date().getTime(),
    },{
        id: 1,
        isDone: true,
        content: "낮잠",
        date: new Date().getTime(),
    },{
        id: 2,
        isDone: false,
        content: "게임",
        date: new Date().getTime(),
    }
]

const reducer = (state, action) => {
    switch(action.type){
        case "CREATE" : return [action.data, ...state]
        case "UPDATE" : return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item)
        case "DELETE" : return state.filter((item) => item.id !== action.targetId)
        default : return state
    }
}

function App() {
    
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // useCallback : 첫번째 인수는 최적화 하고자 하는 함수 -> 불필요하게 재생성 되기를 원치않는 함수
    // 두번째 인수는 의존성배열로 해당 배열이 변경될때 다시 생성 -> 빈배열로 설정하면 최초 마운트시에만 생성
    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current ++,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        })
    }, [])

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId
        })
    }, [])

    // const onDelete = (targetId) => {
    //     dispatch({
    //         type: "DELETE",
    //         targetId: targetId
    //     })
    // }

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId
        })
    }, [])

    return (
        <div className='app'>
            {/* <Exam /> */}
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App
