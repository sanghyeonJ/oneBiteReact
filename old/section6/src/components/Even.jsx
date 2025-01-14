import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // useEffect의 콜백함수가 반환하는(return하는) 함수를 '클린업' 또는 '정리함수' 라고한다.
        // 클린업은 해당 useEffect가 끝날 때 실행

        // 의존성 배열이 빈배열이므로 마운트될때 실행되고 언마운트될때 종료된다.
        // 따라서 해당 컴포넌트가 언마운트될때 아래의 클린업을 호출하여 console.log 를 출력한다.
        return () => {
            console.log("unmount");
        }
    }, []);

    return <div>짝수</div>
}

export default Even;