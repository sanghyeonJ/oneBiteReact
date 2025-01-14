import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }
    const filteredTodos = getFilteredData();

    // useMemo : 첫번째 인수로 콜백함수(메모이제이션 하고자 하는 함수), 두번째 인수로 의존성 배열
    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {totalCount, doneCount, notDoneCount}
    }, [todos])

    return (
        <div className="list">
            <h4>Todo List</h4>
            <div>
                <div>totalCount: {totalCount}</div>
                <div>doneCount: {doneCount}</div>
                <div>notDoneCount: {notDoneCount}</div>
            </div>
            <input type="text" placeholder="search" value={search} onChange={onChangeSearch} />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                })}
            </div>
        </div>
    )
}

export default List;