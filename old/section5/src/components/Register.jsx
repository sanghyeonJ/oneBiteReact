import { useState, useRef  } from "react";


const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0);
    const inputRef = useRef()


    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)

        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = () => {
        if(input.name === ""){
            inputRef.current.focus();
        }
    }

    return (
        <>
            <div><input ref={inputRef} name="name" placeholder={"이름"} onChange={onChange} value={input.name} /></div>
            <div><input name="birth" type="date" onChange={onChange} value={input.birth} /></div>
            <div>
                <select name="country" onChange={onChange} value={input.country}>
                    <option></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" placeholder={"자기소개"} onChange={onChange} value={input.bio} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </>
    )
}

export default Register;