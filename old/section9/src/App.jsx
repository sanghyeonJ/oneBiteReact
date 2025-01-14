import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';
import { useReducer, useRef, useState } from 'react';

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

    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current ++,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        })
    }

    const onUpdate = (targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId
        })
    }

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId
        })
    }

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
