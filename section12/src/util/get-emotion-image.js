// public폴더가 아닌 src폴더에 넣어두면 import로 불러올 수 있음
// vite가 이미지를 최적화하여 캐시로 저장해두기 때문에 새로고침할시 이미지를 다시불러오는것을 막을수있다
// 이미지가 많을경우 메모리가 과부하될수 있어서 public폴더에 넣어두는것이 좋음
import emotion1 from './../assets/emotion1.png';
import emotion2 from './../assets/emotion2.png';
import emotion3 from './../assets/emotion3.png';
import emotion4 from './../assets/emotion4.png';
import emotion5 from './../assets/emotion5.png';

export function getEmotionImage(emotionId){
    switch(emotionId){
        case 1: return emotion1;
        case 2: return emotion2;
        case 3: return emotion3;
        case 4: return emotion4;
        case 5: return emotion5;
        default: return null;
    }
}