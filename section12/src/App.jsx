import './App.css';
import {useReducer, useRef, createContext} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

import Button from './components/Button';
import Header from './components/Header';
import {getEmotionImage} from './util/get-emotion-image';


// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "diary" : 일기를 상세히 조회하는 Diary 페이지

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "오늘은 좋은 하루였다."
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "오늘은 나쁜 하루였다."
  }
]

function reducer(state, action){
  switch(action.type){
    case 'CREATE': return [action.data, ...state];
    case 'UPDATE': return state.map(item => String(item.id) === String(action.data.id) ? action.data : item);
    case 'DELETE': return state.filter((item) => String(item.id) !== String(action.id));
    default: return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {

  // 함수로 만들어서 특정조건등에 따라 이동하고싶은경우
  // const nav = useNavigate();
  // const onClickButton = () => {
  //   nav('/new');
  // }

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 일기 추가
  const onCreate = (date, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        date,
        emotionId,
        content
      }
    })
  }

  // 일기 수정
  const onUpdate = (id, date, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        date,
        emotionId,
        content
      }
    })
  }

  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id
    })
  }

  return (
    <>
      <button onClick={() => {
        onCreate(new Date().getTime(), 1, "오늘은??");
      }}>일기 추가 테스트</button>

      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "비밀인데");
      }}>일기 수정 테스트</button>

      <button onClick={() => {
        onDelete(1);
      }}>일기 삭제 테스트</button>
      {/* <Header title={"header"} 
      leftChild={<Button text={"Left"} />} 
      rightChild={<Button text={"Right"} />} />
      <Button text={"버튼"} type={"DEFAULT"} onClick={() => {
        console.log('버튼 클릭');
      }} />
      <Button text={"버튼"} type={"POSITIVE"} onClick={() => {
        console.log('버튼 클릭');
      }} />
      <Button text={"버튼"} type={"NEGATIVE"} onClick={() => {
        console.log('버튼 클릭');
      }} /> */}
      {/* <div>
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
      <button onClick={onClickButton}>New 페이지로 이동</button> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
