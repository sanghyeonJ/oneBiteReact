import { useRef, useState, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    const onSubmit = () => {
        if(content === ""){
            contentRef.current.focus()
            return;
        }
        onCreate(content);
        setContent("");
    }
    return(
        <div>
            <input placeholder="do" ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;