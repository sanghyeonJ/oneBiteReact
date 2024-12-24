import { memo, useContext } from "react"
import { TodoDispatchContext } from "../App"

const TodoItem = ({id, isDone, content, date}) => {

    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id)
    }
    const onDeleteItem = () => {
        onDelete(id)
    }

    return (
        <div>
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}/>
            <b>{content}</b>
            <span>{new Date(date).toLocaleDateString()}</span>
            <button onClick={onDeleteItem}>삭제</button>
        </div>
    )
}

// export default memo(TodoItem, (prevProps, nextProps) => {
//     // true --> props가 바뀌지 않음 -> 리렌더링 x
//     // false -> props가 바뀜 -> 리렌더링 o
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
//     // 위의 네가지 props가 변경될때만 리렌더링

//     return true;
//     // 그 외엔 리렌더링하지않음
// });
export default memo(TodoItem);