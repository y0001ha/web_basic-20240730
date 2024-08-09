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
    - 
*/



/*
    타입 변환 :
    - 
*/



/*
    유니온 타입
    - 
*/



/*
    리터럴 타입
    - 
*/

