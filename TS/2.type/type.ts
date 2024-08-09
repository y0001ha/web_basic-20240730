/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable: string;
variable = '문자열';
//variable = 1234;

function func (arg1: string, arg2: number): string {
    return '문자열';
}

const arrowFunc = (arg1: string, arg2: number): string => {
    return '문자열';
}

/*
    typescript의 타입
    - string: 문자열
    - number: 숫자
    - boolean: 논리
    - null: null
    - undefined: 정의되지 않음
    - object: 객체
    - array: 배열
    - enum: 열거형
    - void: 함수에서 반환값이 없음
    - any: 모든 타입
*/
//const numbers1: array = []; 배열하고싶다고 이러면 안됨
const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3]; //<> 제너릭. 인터페이스 통해서

let string1: string = ''; //기본형
let string2: String = ''; //인터페이스
string2 = string1; //기본형에 인터페이스 넣는거 됨
// string1 = string2; 인터페이스를 기본형에 넣는거 안됨

enum Color {
    RED = '#ff0000', GREEN = '#00ff00', BLUE = '#0000ff'
}
const color: Color = Color.RED; //그냥 RED만 안됨
console.log(color);

let anyType: any = 10;
anyType = '10';

const voidFunc = (): void => {
    return;
    //return (); void라 값을 넣는건 안됨
}

const func2 = (arg: string): string => {
    return '';
}
let funcType: (arg: string) => string;               //-@@@@@@@@@ 함수를 결정하는것은 매개변수의 조합하고 반환타입이다.
funcType = func2;
// funcType = voidFunc;


/*
    타입추론 :
    - 타입을 선언하지 않고 변수에 값이 초기화되는 순간에 초기화된 값에 따라서 변수의 타입이 결정
*/
let stringVariable = '';
// stringVariable = 10;

const func3 = (arg: number): number | string => {
    if (arg === 1) return 1;
    return '';
}


/*
    타입 변환 :
    - as 키워드로 형변환 가능 (객체일때 자주 사용), <> 연산자로 형변환 가능
*/
const PI: any = '3.14';
let piNumber: number = PI as number;
piNumber = Number(PI);
piNumber = <number>PI;

// const PI: string = '3.14';
// let piNumber: number = PI as number; // 수직적인
// piNumber = Number(PI); // 기본형 완벽한 형변환. 수평적인
// piNumber = <number>PI; //수직적인


/*
    유니온 타입
    - 복수의 타입을 지정하는 방법, | 사용
*/
let union: number | string;
union = 10;
union = '10';
// union = false;
// const number1: number = union;  문자가 올수도 있어서 불가능
// const number1: number = union as number;


/*
    리터럴 타입
    - 지정한 리터럴 값만 가질수 있는 타입
*/
let day: '낮' | '밤';
day = '낮';
day = '밤';
// day = '아침';
