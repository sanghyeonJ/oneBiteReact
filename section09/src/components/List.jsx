import { useContext, useMemo, useRef, useState } from "react"
import TodoItem from "./TodoItem"
import { TodoStateContext } from "../App";

const List = () => {

    const [search, setSearch] = useState("");
    const todos = useContext(TodoStateContext);

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }
    const filteredTodos = getFilteredData()

    const {totalCount, doneCount, notDoneDount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneDount = totalCount - doneCount;
        return{
            totalCount,
            doneCount,
            notDoneDount
        }
    }, [todos]);

    return(
        <div>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneDount}</div>
            <input placeholder="search" value={search} onChange={onChangeSearch} />
            <div>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />
                })}
            </div>
        </div>
    )
}

export default List;