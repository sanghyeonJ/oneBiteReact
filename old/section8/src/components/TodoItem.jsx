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

export default TodoItem;