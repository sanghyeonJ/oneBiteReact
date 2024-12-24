import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { createContext, useCallback, useMemo, useReducer, useRef, useState } from 'react'

const mockTodo = [{
    id: 0,
    content: '일번',
    isDone: false,
    date: new Date().getTime()
},{
    id: 1,
    content: '이번',
    isDone: false,
    date: new Date().getTime()
},{
    id: 2,
    content: '삼번',
    isDone: true,
    date: new Date().getTime()
}]

// function reducer(state, action) {
//     switch(action.type){
//         case 'INCREASE': return state += action.data;
//         case 'DECREASE': return state -= action.data;
//         default: return state;
//     }
// }

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();


function reducer(state, action) {
    switch(action.type){
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
        case 'DELETE':
            return state.filter((item) => item.id !== action.targetId );
        default:
            return state;
    }
}

function App() {

    const [todos, dispatch] = useReducer(reducer, mockTodo);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        })
    }, [])

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId: targetId
        })
    }, [])
    
    const onDelete = useCallback((targetId) => {
        dispatch({
            type: 'DELETE',
            targetId: targetId
        })
    }, []);

    //reducer
    // const [state, dispatch] = useReducer(reducer, 0)

    // const onClickPlus = () => {
    //     // 액션객체를 인수로 전달
    //     dispatch({
    //         type: "INCREASE",
    //         data: 1
    //     })
    // }
    // const onClickMinus = () => {
    //     dispatch({
    //         type: "DECREASE",
    //         data: 1
    //     })
    // }

    const memoizedDispatch = useMemo(()=>{
        return {onCreate, onUpdate, onDelete}
    },[])

    return (
        <div>
            <Header />
                <TodoStateContext.Provider value={todos}>
                    <TodoDispatchContext.Provider value={memoizedDispatch}>
                        <Editor/>
                        <List/>
                    </TodoDispatchContext.Provider>
                </TodoStateContext.Provider>

            {/* <div>
                <b>{state}</b>
                <button onClick={onClickPlus}>+</button>
                <button onClick={onClickMinus}>-</button>
            </div> */}
        </div>
    )
}

export default App
