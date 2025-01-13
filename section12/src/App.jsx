import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

import {getEmotionImage} from './util/get-emotion-image';


// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {

  // 함수로 만들어서 특정조건등에 따라 이동하고싶은경우
  const nav = useNavigate();
  const onClickButton = () => {
    nav('/new');
  }

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="emotion1" />
        <img src={getEmotionImage(2)} alt="emotion2" />
        <img src={getEmotionImage(3)} alt="emotion3" />
        <img src={getEmotionImage(4)} alt="emotion4" />
        <img src={getEmotionImage(5)} alt="emotion5" />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
