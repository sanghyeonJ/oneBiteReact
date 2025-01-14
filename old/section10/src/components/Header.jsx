import { memo } from "react";

const Header = () => {
    return (
        <div className="header">
            <h3>오늘은</h3>
            <h2>{new Date().toDateString()}</h2>
        </div>
    )
}

// props가 변경된 경우에만 리렌더링
export default memo(Header);