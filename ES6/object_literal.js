/**
 * es6 에서는 오브젝트 리터럴 방식이 좀더 간소화 되었습니다.
 * 아래의 두 예문을 비교해보세요.
 */

 // 기존  ES5문법
var sayNode = function() {
    console.log('Node');
}
var es = 'ES';
var oldObject = {
        sayJS : function () {
                console.log('JS');
            },
        sayNode: sayNode,
    };
oldObject[es + 6] = 'Fantastic';

oldObject.sayNode(); // Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); // Fantastic

// ES6 문법
const newObject = {
        sayJS(){
            console.log('JS');
        },
        sayNode,
        [es + 6]: 'Fantastic', // 안쪽에서 속성이름을 동적으로 만들 수 있다.
    }
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic

// 오브젝트 속성명과 변수명이 같을 경우 합칠 수 있다.
{name: name, age: age} //ES5
{name, age} // ES6
