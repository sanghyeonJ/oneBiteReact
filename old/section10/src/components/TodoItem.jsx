import { memo } from "react"

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

    const onChangeCheckbox = () => {
        onUpdate(id)
    }
    const onClickDelete = () => {
        onDelete(id)
    }

    return (
        <div className="todoitem">
            <input checked={isDone} onChange={onChangeCheckbox} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>delete</button>
        </div>
    )
}

// memo함수의 두번째 인수로는 콜백함수를 전달할 수 있다.
// 콜백함수의 반환값에따라 props가 바뀌었는지 판단
// true -> props 바뀌지 않음 -> 리렌더링 x
// false -> props 바뀜 -> 리렌데링 o

// 컴포넌트를 인수로 받아서 해당 컴포넌트에 최적화나 메모이제이션같은 추가적인 기능을 덧붙여서
// 기능이 추가된 새로운 컴포넌트를 반환하는 memo와 같은 메서드를 고차컴포넌트(HOC)라고 한다.
// export default memo(TodoItem, (prevProps, nextProps) => {
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);