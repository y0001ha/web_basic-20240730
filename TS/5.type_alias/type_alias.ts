/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법 (타입의 별칭 지정)
    - type 키워드를 사용
*/
//let day: '일' | '월' | '화' | '수';

type WEEK = '일' | '월' | '화' | '수';
let day: WEEK = '일';

type BoardContents = string;
let contents: BoardContents = '내용';


// 객체의 타입 지정 방법
// 1. interface 이용
interface IHuman {
    name: string;
    age: number;
    address: string;
} //코드블럭{} 라서 ;
const human1: IHuman = {
    name: '홍길동',
    age: 23,
    address: '부산시'
}

// 2. type 이용
type THuman = {
    name: string,
    age: number,
    address: string
}//객체 {}라서 ,

const human2: THuman = {
    name: '홍길동',
    age: 23,
    address: '부산시'
}

// 3. class 이용
class CHuman {
    name: string = '';
    age: number = 0;
// 기본값이나 constructor
}

const human3: CHuman = {
    name: '홍길동',
    age: 23
}

const human: IHuman = { ...human2 , address : '부산시'};

console.log('==================================================');
