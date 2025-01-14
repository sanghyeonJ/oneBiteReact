import { useRef, useState } from "react"

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit()
        }
    }

    const onSubmit = () => {
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    return (
        <div className="editor">
            <input ref={contentRef} placeholder="new todo..." onKeyDown={onKeyDown} onChange={onChangeContent} value={content} />
            <button onClick={onSubmit}>add</button>
        </div>
    )
}

export default Editor;