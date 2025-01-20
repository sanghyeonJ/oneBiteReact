import { useParams } from 'react-router-dom';

const Edit = () => {
    const params = useParams();
    return <div>{params.id}번 일기를 수정합니다.</div>
}

export default Edit;