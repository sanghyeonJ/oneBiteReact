import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {

    const [count, setCount] = useState(0);

    // useEffect
    // 두번째 인수로 전달한 배열의 값이 바뀌면 첫번째 인수로 전달한 콜백함수를 실행
    // 이때 두번째 인수로 전달한 배열을 '의존성 배열'이라 함 (dependency array 줄여서 deps)
    // useState는 비동기로 처리되기 때문에 onClickButton에 console.log를 넣으면 setCount가 호출만 되고 완료되기 이전에 console.log가 처리된다
    // 따라서 이전의 count값이 출력되므로 useEffect를 이용하여 count값의 변경에 대한 사이드이펙트를 불러일으킨다.
    // useEffect(() => {
    //     console.log(`count: ${count}`)
    // }, [count]);

    const isMount = useRef(false);
    
    //////////////////
    // useEffect로 라이프 사이클 제어하기
    // 1. 마운트 - 의존성 배열을 빈배열로
    useEffect(() => {
        console.log("mount");
    }, []);
    // 2. 업데이트 - 의존성 배열을 제거
    useEffect(() => {
        // 최초 렌더링 시 마운트와 함께 업데이트가 발생하므로 아래의 코드가 실행된다
        // 따라서 최초의 마운트를 제외한 리렌더링에서 실행시키기위해 useRef를 이용해서 초기값을 false로 적용하고 이후에는 true로 변경하여 업데이트 처리
        if(!isMount.current){
            isMount.current = true;
            return;
        }
        console.log("update");
    });
    // 3. 언마운트
    // Even 컴포넌트 참고



    const onClickButton = (value) => {
        setCount(count + value);
    }

    return (
        <div className='app'>
            <p>Simple Counter</p>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    )
}

export default App
