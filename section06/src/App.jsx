import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useEffect, useState } from 'react';

function App() {

    const [count , setCount] = useState(0);
    const onClickBtn = (value) => {
        setCount(count + value)
    }

    useEffect(() => {
        console.log("count: " + count);
    }, [count]);

    return (
        <div>
            <Viewer count={count} />
            <Controller onClickBtn={onClickBtn}/>
        </div>
    )
}

export default App
